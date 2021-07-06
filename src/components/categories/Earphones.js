import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";
import Shop from "../layouts/Bodylayout/Shop";
import Footer from "../layouts/footer/Footer";
import EarphoneBody from "./Earphone/EarphoneBody";

function Earphones(props) {
  return (
    <div className="EarphoneMain">
      <HeaderShared />
      <EarphoneBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

Earphones.propTypes = {};

export default Earphones;
