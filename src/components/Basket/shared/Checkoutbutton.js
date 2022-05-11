import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import { CheckoutButtonContainer } from "./cartsharedstyling";

const Checkoutbutton = () => {
  const AudioContext = useContext(audioContext);
  const { CheckoutIconClicked } = AudioContext;
  return (
    <CheckoutButtonContainer onClick={() => CheckoutIconClicked} to="/checkout">
      CHECKOUT
    </CheckoutButtonContainer>
  );
};

export default Checkoutbutton;
