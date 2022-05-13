import React from "react";
import { CashOnDeliveryContainer, CashText, Icon } from "./paymentstyling";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";

library.add(faHandHoldingDollar);

const CashOnDelivery = () => {
  return (
    <CashOnDeliveryContainer>
      <Icon icon={faHandHoldingDollar} />
      <CashText>
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </CashText>
    </CashOnDeliveryContainer>
  );
};

export default CashOnDelivery;
