import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";
import Shop from "../layouts/Bodylayout/Shop";
import Footer from "../layouts/footer/Footer";
import SpeakerBody from "./Speaker/SpeakerBody";

function Speakers(props) {
  const {countCartItems,bucketIconClicked} = props;
  return (
    <div className='SpeakerMain'>
      <HeaderShared bucketIconClicked={bucketIconClicked} countCartItems={countCartItems} />
      <SpeakerBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

Speakers.propTypes = {};

export default Speakers;
