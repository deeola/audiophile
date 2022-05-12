import React, { useContext } from "react";
import audioContext from "../../context/Audiophile/audioContext";
import { CartContainer } from "./CartStyling";
import CartImageControl from "./shared/CartImageControl";
import CartTop from "./shared/CartTop";
import Checkoutbutton from "./shared/Checkoutbutton";
import TotalPrice from "./shared/TotalPrice";

const Cart = () => {
  const AudioContext = useContext(audioContext);
  const { openBucket } = AudioContext;

  return (
    <CartContainer style={openBucket()}>
      <CartTop />
      <CartImageControl />
      <TotalPrice />
      <Checkoutbutton />
    </CartContainer>
  );
};

export default Cart;
