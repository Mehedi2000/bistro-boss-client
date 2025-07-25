import { loadStripe } from "@stripe/stripe-js";
import DashboardSectionTitle from "../../../Component/DashboardSectionTitle/DashboardSectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK);

const Payment = () => {
  return (
    <div>
      <DashboardSectionTitle
        subHeading="---Please pay to eat---"
        heading="Payment"
      ></DashboardSectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
