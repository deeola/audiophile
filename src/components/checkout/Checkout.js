import React from "react";
import Footer from "../layouts/footer/Footer";
import Navbar from "../layouts/Header/Navbar";
import FormCheckout from "./FormCheckout";
import LayoutCheck from "./LayoutCheck";
import Success from "./Success";

function Checkout(props) {
  return (
    <div>
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
      <Success />
      <LayoutCheck />
    </div>
  );
}

export default Checkout;
