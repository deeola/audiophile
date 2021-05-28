import React from "react";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/Header/Navbar";
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
    <div >
      <div
        className="productnav"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "97px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
      </div>
      <FormCheckout />
      <Footer />
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
