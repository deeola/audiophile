import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import Cartcount from "./Cartcount";
import { CartTopContainer } from "./cartsharedstyling";
import RemoveAll from "./RemoveAll";

const CartTop = () => {
  const AudioContext = useContext(audioContext);
  const { cartItems } = AudioContext;

  return (
    <CartTopContainer>
      <Cartcount cartcount={cartItems.length} />
      <RemoveAll />
    </CartTopContainer>
  );
};

export default CartTop;
