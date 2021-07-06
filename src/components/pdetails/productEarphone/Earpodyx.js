import React from "react";
import { Link } from "react-router-dom";
import Gear from "../../layouts/Bodylayout/Gear";
import Shop from "../../layouts/Bodylayout/Shop";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/Header/Navbar";
import EarpodBody from "./EarpodBody";

function Test(props) {
  return (
    <div className="productBody">
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
      <Link className="Gobacklink" to="/earphones">
        Go Back
      </Link>
      <EarpodBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Test;
