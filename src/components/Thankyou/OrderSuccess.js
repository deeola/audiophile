import React from "react";
import OrderedItems from "./OrderedItems";
import { library } from "@fortawesome/fontawesome-svg-core";


import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Icon, OrderSuccessContainer, ThankyouContainer, Confirmation, BackToHome } from "./Ordersuccessstyling";

library.add(faCircleCheck);


const OrderSuccess = () => {

  return (
    <OrderSuccessContainer>
      <Icon icon={faCircleCheck} />
      <ThankyouContainer>Thank you for your order</ThankyouContainer>
      <Confirmation>You will receive an email confirmation shortly</Confirmation>
      <OrderedItems />
      <BackToHome to={'/'}>BACK TO HOME</BackToHome>
    </OrderSuccessContainer>
  );
};

export default OrderSuccess;



