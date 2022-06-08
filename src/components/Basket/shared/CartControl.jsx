import React, { FC, useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import {
  CartControlAddRemove,
  CartControlButton,
  CartControlNumber,
} from "./cartsharedstyling";

const CartControl= ({ onRemove, onAdd, itemqty }) => {
  return (
 
      <CartControlButton>
        <CartControlAddRemove onClick={onRemove}>-</CartControlAddRemove>
        <CartControlNumber>{itemqty}</CartControlNumber>
        <CartControlAddRemove onClick={onAdd}>+</CartControlAddRemove>
      </CartControlButton>
 
  );
};

export default CartControl;
