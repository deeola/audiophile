import React, { useContext } from "react";
import audioContext from "../../context/Audiophile/audioContext";
import useForm from "../checkout/useForm";
import BillingDetails from "./BillingDetails/BillingDetails";
import PaymentDetails from "./PaymentDetails/PaymentDetails";
import ShippingDetails from "./ShippingDetails/ShippingDetails";
import Summary from "./Summary/Summary";
import validate from "../checkout/ValidateSign";
import { FormContainer, FormLeft, FormRight } from "./formstyling";

const Checkout = () => {
  const AudioContext = useContext(audioContext);
  const { continueAndPay } = AudioContext;

  const { handleSubmit } = useForm(continueAndPay, validate);
  
  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <FormLeft>
        <BillingDetails />
        <ShippingDetails />
        <PaymentDetails />
      </FormLeft>
      <FormRight>
        <Summary />
      </FormRight>
    </FormContainer>
  );
};

export default Checkout;
