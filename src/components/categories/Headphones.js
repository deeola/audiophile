import React from "react";
import Headphones from "../Category/Headphones/Headphones";
import Gear from "../Homey/Gear/Gear";
import Footer from "../layouts/footer/Footer";
import Shop from "../shared/Shop/Shop";
import HeaderShared from "./shared/HeaderShared";


function Headphoness(props) {
  return (
    <div className="HeadphoneMain">
      <HeaderShared title={'Headphones'} />
      <Headphones />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Headphoness;


