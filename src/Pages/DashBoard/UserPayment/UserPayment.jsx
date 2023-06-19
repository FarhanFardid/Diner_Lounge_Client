import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const UserPayment = () => {
    return (
        <div>
        <Helmet>
<title>Diner Lounge | Payment </title>

</Helmet>
    
    <SectionTitle heading="Payment " subHeading="Please Make The Payment"></SectionTitle>
    <Elements stripe={stripePromise}> <CheckoutForm></CheckoutForm></Elements>
   
</div>
    );
};

export default UserPayment;