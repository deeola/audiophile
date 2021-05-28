import React from "react";
import Layer from "../home/Layer";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/Header/Navbar";
import FormCheckout from "./FormCheckout";
import Success from "./Success";
import Summary from "./Summary";

function Checkout(props) {
  const {
    openCHECKOUT,
    cartItems,
    onAdd,
    onRemove,
    openBucket,
    myBucketDisplay,
    removeAll
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
      <Success removeAll={removeAll} />
      {/* <Layer /> */}
    </div>
  );
}

export default Checkout;
