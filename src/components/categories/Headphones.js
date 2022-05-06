import React from "react";
import Gear from "../layouts/Bodylayout/Gear";
import Footer from "../layouts/footer/Footer";
import HeadphoneBody from "./Headphone/HeadphoneBody";
import HeaderShared from "./shared/HeaderShared";

function Headphones(props) {
  return (
    <div className="HeadphoneMain">
      <HeaderShared title={'Headphones'} />
      <HeadphoneBody />
      <Gear className="HeadphoneGear" />
      <Footer />
    </div>
  );
}

export default Headphones;
