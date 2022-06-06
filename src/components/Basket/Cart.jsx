import React, { FC, useContext } from "react";

import audioContext from "../../context/Audiophile/audioContext";
import { CartContainer } from "./CartStyling";
import CartImageControl from "./shared/CartImageControl";
import CartTop from "./shared/CartTop";
import Checkoutbutton from "./shared/Checkoutbutton";
import EmptyCart from "./shared/EmptyCart";
import TotalPrice from "./shared/TotalPrice";



const Cart = () => {
  const AudioContext = useContext(audioContext);
  const { openBucket, cartItems } = AudioContext;

  return (
    <CartContainer style={openBucket()} >
      <CartTop />
      {cartItems.length === 0 && <EmptyCart />}
      {cartItems.length !== 0 && <CartImageControl />}
      {cartItems.length !== 0 && <TotalPrice />}
      {cartItems.length !== 0 && <Checkoutbutton  />}
    </CartContainer>
  );
};

export default Cart;
