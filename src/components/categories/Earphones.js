import React from "react";
import HeaderShared from "./shared/HeaderShared";
import EarphoneBody from "../../components/Category/Earphone/EarphoneBody";
import Footer from "../layouts/footer/Footer";
import Shop from "../shared/Shop/Shop";

import Gear from "../../components/Homey/Gear/Gear";

function Earphones(props) {
  return (
    <div className="EarphoneMain">
      <HeaderShared title={"Earphones"} />
      <EarphoneBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

Earphones.propTypes = {};

export default Earphones;
