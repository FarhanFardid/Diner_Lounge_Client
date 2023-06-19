import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import './CheckoutForm.css'


const CheckoutForm = ({cart, price}) => {
    const {user} = useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements(); 
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');

    useEffect(()=>{
     if(price>0){
        axiosSecure.post('/create-payment-intent', {price})
        .then (res=> {
            
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
     }
    },[price,axiosSecure])

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements ){
            return
        }
        const card = elements.getElement(CardElement);

        if(card == null){
            return 
        }
        console.log('card', card)
        
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            setCardError(error.message)
            console.log('error', error)
        }
       else{
        setCardError('')
        console.log('payment method', paymentMethod)
       }
       setProcessing(true);
       const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
         payment_method:{
            card:card,
            billing_details:{
                name:user?.displayName || 'anonymous',
                email: user?.email || "unknown"
            },
         },
       },
       );
       if(confirmError){
        console.log(confirmError)
       }
       console.log('paymentIntent',paymentIntent)
       setProcessing(false)
       if(paymentIntent.status === "succeeded"){
        setTransactionId(paymentIntent.id)

        const payment ={
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart?.length,
            status: "service pending",
            cartItems: cart.map(item=> item._id),
            menuItem: cart.map(item=> item.foodItemId),
            itemNames: cart.map(item =>item.name)
        }
        axiosSecure.post('/payments', payment)
        .then(data=>{
            console.log(data.data)
            if (data.data.insertResult.insertedId) {
                
                Swal.fire({
                  title: "Success",
                  text: "Payment Added to payment History List Successfully ",
                  icon: "success",
                  confirmButtonText: "Cool",
                });
              } 
        })
    
       }
    }
    return (
        <> <form onSubmit={handleSubmit} className="w-2/3 m-10 border-2 border-slate-800 rounded-md p-3 mx-auto text-center">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className="btn btn-md px-3 w-24 m-3 mt-5" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
     {cardError && <p className="text-red-600 text-center">{cardError}</p>} 
     {transactionId && <p className="text-green-600 text-center">Transaction Successful with TransactionId {transactionId}</p> }
      </>
       
    );
};

export default CheckoutForm;