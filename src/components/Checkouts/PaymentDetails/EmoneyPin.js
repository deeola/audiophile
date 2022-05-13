import React, { useContext } from "react";
import Input from "../Shared.js/Input";
import { EMoneyContainer } from "./paymentstyling";
import useForm from "../../checkout/useForm";
import audioContext from "../../../context/Audiophile/audioContext";
import validate from "../../checkout/ValidateSign";

const EmoneyPin = () => {
  const AudioContext = useContext(audioContext);
  const { continueAndPay, showIconclicked, handleChange } = AudioContext;

  const {} = useForm(continueAndPay, validate);
  return (
    <EMoneyContainer>
      <Input
        handleChange={handleChange}
        formtype="number"
        placeholder="53392*********"
        name="moneyNumber"
        id="moneyNumber"
        label={"E-Money Number"}
        forlabel={"moneyNumber"}
      />
      <Input
        handleChange={handleChange}
        formtype="password"
        placeholder="please enter your secret pin"
        name="moneyPinr"
        id="moneyPin"
        label={"Pin"}
        forlabel={"moneyPin"}
      />
    </EMoneyContainer>
  );
};

export default EmoneyPin;
