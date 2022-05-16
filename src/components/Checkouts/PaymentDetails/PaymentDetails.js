import React, { useContext, useState } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import useForm from "../../checkout/useForm";
import {
  BillingContainer,
  BillingText,
} from "../BillingDetails/billingstyling";
import Input from "../Shared.js/Input";
import {
  PaymentRight,
  PaymentRightTop,
  PaymentMethod,
  PayementSectionContainer,
} from "./paymentstyling";
import validate from "../../checkout/ValidateSign";
import EmoneyPin from "./EmoneyPin";
import CashOnDelivery from "./CashOnDelivery";

const PaymentDetails = () => {
  const AudioContext = useContext(audioContext);
  const { continueAndPay, showIconclicked, clickTrue, clickTrues } =
    AudioContext;

  const {} = useForm(continueAndPay, validate);

  const [radioState, setRadioState] = useState(true);


  const changeRadioState = () => {
    setRadioState(!radioState);
  };

  const iconClicked = () => {
    showIconclicked();
    changeRadioState();
    console.log(radioState);
  };

 

  return (
    <BillingContainer>
      <BillingText>PAYMENT DETAILS</BillingText>
      <PayementSectionContainer>
        <PaymentMethod>Payment Method</PaymentMethod>
        <PaymentRight>
          <PaymentRightTop>
            <label htmlFor={"emoney"}>e-Money</label>
            <input
              onClick={() => iconClicked()}
              type="radio"
              name="paymentSelect"
              value="true"
              id="emoney"
              checked = {radioState === true}
           
            />
          </PaymentRightTop>
          <PaymentRightTop>
            <label htmlFor={"cash"}>Cash on Delivery</label>
            <input
              onClick={() => iconClicked()}
              type="radio"
              name="paymentSelect"
              value="false"
              id="cash"
              checked = {radioState === false}
            />
          </PaymentRightTop>
        </PaymentRight>
      </PayementSectionContainer>
   
      {radioState ? <EmoneyPin /> : <CashOnDelivery />}

    
    </BillingContainer>
  );
};

export default PaymentDetails;
