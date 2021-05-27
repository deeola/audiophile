import React from "react";
import FormCheckout from "./FormCheckout";
import Summary from "./Summary";

function Checkout(props) {
  const {
    openCHECKOUT,
    cartItems,
    onAdd,
    onRemove,
    openBucket,
    myBucketDisplay,
  } = props;
  return (
    <div className="Buckets"   style={openCHECKOUT()}>
      <FormCheckout />
      {/* <Summary
        openBucket={openBucket}
        myBucketDisplay={myBucketDisplay}
        onAdd={onAdd}
        onRemove={onRemove}
        cartItems={cartItems}
      /> */}
    </div>
  );
}

export default Checkout;
