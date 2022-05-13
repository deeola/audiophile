import React from "react";
import { PriceAmount, PriceContainer, PriceLabel } from "./summarystyling";

const Prices = ({ label, amount, primary }) => {
  return (
    <PriceContainer>
      <PriceLabel>{label}</PriceLabel>
      <PriceAmount primary={primary}>€{amount}</PriceAmount>
    </PriceContainer>
  );
};

export default Prices;
