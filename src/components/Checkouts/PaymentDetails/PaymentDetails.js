import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import useForm from "../../checkout/useForm";
import {
  BillingContainer,
  BillingText,
} from "../BillingDetails/billingstyling";
import Input from "../Shared.js/Input";
import {
  PaymentRightBottom,
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
  const { continueAndPay, showIconclicked, clickTrue, clickTrues } = AudioContext;

  const {} = useForm(continueAndPay, validate);

  return (
    <BillingContainer>
      <BillingText>PAYMENT DETAILS</BillingText>
      <PayementSectionContainer>
        <PaymentMethod>Payment Method</PaymentMethod>
        <PaymentRight>
          <PaymentRightTop>
            <Input
              onClick={showIconclicked}
              formtype="radio"
              name="paymentSelect"
              value="true"
              id="emoney"
              label={'E-Money'}
              forlabel={'emoney'}
            />
          </PaymentRightTop>
          <PaymentRightBottom>
            <Input
              onClick={showIconclicked}
              formtype="radio"
              name="paymentSelect"
              value="false"
              id="cash"
              forlabel={'cash'}
              label={'Cash on Delivery'}
            />
          </PaymentRightBottom>
        </PaymentRight>
      </PayementSectionContainer>
      <EmoneyPin style={clickTrue()} />
      <CashOnDelivery  style={clickTrues()} />
    </BillingContainer>
  );
};

export default PaymentDetails;


