import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import {
  CartControlAddRemove,
  CartControlButton,
  CartControlNumber,
} from "./cartsharedstyling";

const CartControl = () => {
  const AudioContext = useContext(audioContext);
  const { cartItems, onAdd, onRemove } = AudioContext;
  return (
    <>
      {cartItems.map((item) => (
        <CartControlButton key={item.id}>
          <CartControlAddRemove onClick={() => onRemove(item)}>
            -
          </CartControlAddRemove>
          <CartControlNumber>{item.qty}</CartControlNumber>
          <CartControlAddRemove onClick={() => onAdd(item)}>
            +
          </CartControlAddRemove>
        </CartControlButton>
      ))}
    </>
  );
};

export default CartControl;
