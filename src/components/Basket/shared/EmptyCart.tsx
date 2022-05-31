import React from "react";
import { Empty, EmptyCartContainer, ContinueShopping } from "./cartsharedstyling";

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
      <Empty>Your Cart is Empty</Empty>
      <Empty>Add Items to your cart</Empty>
      <ContinueShopping>CONTINUE SHOPPING</ContinueShopping>
    </EmptyCartContainer>
  );
};

export default EmptyCart;
