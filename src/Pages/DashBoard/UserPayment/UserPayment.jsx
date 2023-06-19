import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const UserPayment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <Helmet>
        <title>Diner Lounge | Payment </title>
      </Helmet>

      <SectionTitle
        heading="Payment "
        subHeading="Please Make The Payment"
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        {" "}
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default UserPayment;
