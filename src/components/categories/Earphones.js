import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";

import Footer from "../layouts/footer/Footer";
import EarphoneBody from "./Earphone/EarphoneBody";


function Earphones(props) {
  return (
    <div className="EarphoneMain">
      <HeaderShared title={'Earphones'}/>
      <EarphoneBody />
      <Gear />
      <Footer />
    </div>
  );
}

Earphones.propTypes = {};

export default Earphones;


