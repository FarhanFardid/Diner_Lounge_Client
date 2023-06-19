import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements(); 
    const [cardError, setCardError] = useState('');

    const handleSubmit = async (event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }
        const card  = elements.getElement(CardElement);

        if(card == null){
            return;
        }

        console.log(card)
        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if(error){
            console.log('error', error)
            setCardError(error.message)
        }
        else{
            setCardError('');
            console.log('payment Method', paymentMethod)
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
        <button type="submit" className="btn btn-md px-3 w-24 m-3 mt-5" disabled={!stripe}>
          Pay
        </button>
      </form>
     {cardError && <p className="text-red-600 text-center">{cardError}</p>} 
      </>
       
    );
};

export default CheckoutForm;