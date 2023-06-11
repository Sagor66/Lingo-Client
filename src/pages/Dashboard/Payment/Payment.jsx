import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../components/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";
import { useLoaderData, useLocation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {

  const data = useLoaderData()

  return (
    <div className="min-w-[600px]">
      <h2 className="text-5xl font-nunito font-black text-blue-400 text-center">Payment</h2>
      <Elements stripe={stripePromise}>
        {
          data.map(cart => (
            <CheckoutForm key={cart._id} cart={cart}></CheckoutForm>
          ))
        }
      </Elements>
    </div>
  );
};

export default Payment;