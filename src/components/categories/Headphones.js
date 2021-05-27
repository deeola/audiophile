import React from "react";
import Gear from "../layouts/Bodylayout/Gear";
import Shop from "../layouts/Bodylayout/Shop";
import Footer from "../layouts/footer/Footer";
import HeadphoneBody from "./Headphone/HeadphoneBody";
import HeaderShared from "./shared/HeaderShared";


function Headphones(props) {

  const {countCartItems,bucketIconClicked} = props;
  return (
    <div className='HeadphoneMain'>
        <HeaderShared bucketIconClicked={bucketIconClicked} countCartItems = {countCartItems} />
        <HeadphoneBody />
        <Shop />
        <Gear className='HeadphoneGear' />
        <Footer />
        
    </div>
  );
}

export default Headphones;
