import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";
import Shop from "../layouts/Bodylayout/Shop";
import Footer from "../layouts/footer/Footer";
import EarphoneBody from "./Earphone/EarphoneBody";



function Earphones(props) {
  const {countCartItems,bucketIconClicked} = props;
  return (
    <div className='EarphoneMain'>
      <HeaderShared bucketIconClicked={bucketIconClicked} countCartItems={countCartItems} />
      <EarphoneBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

Earphones.propTypes = {};

export default Earphones;
