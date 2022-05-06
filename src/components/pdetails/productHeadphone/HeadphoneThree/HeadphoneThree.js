import React from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import HeadphoneThreebody from "./HeadphoneThreebody";
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

      <Gear />
      <Footer />
    </div>
  );
}

export default HeadphoneThree;
