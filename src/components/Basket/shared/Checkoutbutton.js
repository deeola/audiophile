import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import { CheckoutButtonContainer } from "./cartsharedstyling";

const Checkoutbutton = () => {
  const AudioContext = useContext(audioContext);
  const { CheckoutIconClicked, cartItems } = AudioContext;
  return (
    <CheckoutButtonContainer onClick={() => CheckoutIconClicked} to={cartItems.length !== 0 ? "/checkout" : '' } >
      CHECKOUT
    </CheckoutButtonContainer>
  );
};

export default Checkoutbutton;
