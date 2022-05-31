import React, { FC, useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import {
  CartControlAddRemove,
  CartControlButton,
  CartControlNumber,
} from "./cartsharedstyling";

interface Props{
  onRemove: () => React.MouseEventHandler<HTMLParagraphElement>,
  onAdd: () => React.MouseEventHandler<HTMLParagraphElement>,
  itemqty: number
}


const CartControl:FC<Props> = ({ onRemove, onAdd, itemqty }) => {
  return (
 
      <CartControlButton>
        <CartControlAddRemove onClick={onRemove}>-</CartControlAddRemove>
        <CartControlNumber>{itemqty}</CartControlNumber>
        <CartControlAddRemove onClick={onAdd}>+</CartControlAddRemove>
      </CartControlButton>
 
  );
};

export default CartControl;
