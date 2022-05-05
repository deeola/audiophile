import React from "react";
import Navbar from "../../../shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import SpeakerTwobody from "./SpeakerTwobody";
import Shop from "../../../layouts/Bodylayout/Shop";
import Gear from "../../../layouts/Bodylayout/Gear";
import Footer from "../../../layouts/footer/Footer";

function Speakerzx7(props) {
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
      <Link className="Gobacklink" to="/speakers">
        Go Back
      </Link>
      <SpeakerTwobody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Speakerzx7;
