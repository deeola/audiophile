import React from "react";
import Navbar from "../../../layouts/Header/Navbar";
import { Link } from "react-router-dom";
import HeadphoneThreebody from "./HeadphoneThreebody";
import Shop from "../../../layouts/Bodylayout/Shop";
import Gear from "../../../layouts/Bodylayout/Gear";
import Footer from "../../../layouts/footer/Footer";

function HeadphoneThree(props) {
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
      <Link className="Gobacklink" to="/headphones">
        Go Back
      </Link>
      <HeadphoneThreebody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default HeadphoneThree;
