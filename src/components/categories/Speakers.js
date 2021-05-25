import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";
import Shop from "../layouts/Bodylayout/Shop";
import Footer from "../layouts/footer/Footer";
import SpeakerBody from "./Speaker/SpeakerBody";

function Speakers(props) {
  return (
    <div className='SpeakerMain'>
      <HeaderShared />
      <SpeakerBody />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

Speakers.propTypes = {};

export default Speakers;
