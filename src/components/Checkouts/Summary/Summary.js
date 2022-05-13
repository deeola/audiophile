import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import Prices from "./Prices";
import SummaryDetails from "./SummaryDetails";
import { ContineandPayContainer, SummaryContainer, SummaryTop } from "./summarystyling";


const Summary = () => {
  const AudioContext = useContext(audioContext);
  const { itemsPrice, shippingPrice, taxprice, TotalPrice } = AudioContext;
  return (
    <SummaryContainer>
      <SummaryTop>SUMMARY</SummaryTop>
      <SummaryDetails />
      <Prices label={"TOTAL"} amount={itemsPrice.toFixed(2)} />
      <Prices label={"SHIPPING"} amount={shippingPrice.toFixed(2)} />
      <Prices label={"VAT(TAX INCLUDED)"} amount={taxprice.toFixed(2)} />
      <Prices primary label={"GRAND TOTAL"} amount={TotalPrice.toFixed(2)} />
      <ContineandPayContainer type="submit">CONTINUE</ContineandPayContainer>
    </SummaryContainer>
  );
};

export default Summary;
