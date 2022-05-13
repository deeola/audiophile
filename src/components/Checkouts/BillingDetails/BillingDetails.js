import React, { useContext } from "react";
import {
  BillingBottom,
  BillingContainer,
  BillingText,
  BillingTop,
} from "./billingstyling";
import Input from "../Shared.js/Input";
import audioContext from "../../../context/Audiophile/audioContext";
import useForm from "../../checkout/useForm";
import validate from "../../checkout/ValidateSign";

const BillingDetails = () => {
  const AudioContext = useContext(audioContext);
  const {
    continueAndPay,
  } = AudioContext;

  const { handleChange, values, errors } = useForm(
    continueAndPay,
    validate
  );
  return (
    <BillingContainer>
      <BillingText>BILLING DETAILS</BillingText>
      <BillingTop>
        <Input
          handleChange={handleChange}
          formtype="text"
          placeholder="Wagner Adeyemi"
          name="name"
          value={values.name}
          id="name"
          label={"Name"}
          forlabel={"name"}
          error={errors.name}
        />
        <Input
          handleChange={handleChange}
          formtype="email"
          placeholder="lovecoding@gmail.com"
          name="email"
          id="email"
          value={values.email}
          label={"E-mail"}
          forlabel={"email"}
          error={errors.name}
        />
      </BillingTop>
      <BillingBottom>
        <Input
          handleChange={handleChange}
          formtype="number"
          placeholder="+123456789"
          name="number"
          value={values.number}
          id="number"
          label={"Phone Number"}
          forlabel={"number"}
          error={errors.number}
        />
      </BillingBottom>
    </BillingContainer>
  );
};

export default BillingDetails;
