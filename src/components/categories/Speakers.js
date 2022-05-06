import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Gear from "../layouts/Bodylayout/Gear";
import Footer from "../layouts/footer/Footer";
import SpeakerBody from "./Speaker/SpeakerBody";

function Speakers(props) {
  return (
    <div className="SpeakerMain">
      <HeaderShared title={'Speakers'} />
      <SpeakerBody />
      <Gear />
      <Footer />
    </div>
  );
}

Speakers.propTypes = {};

export default Speakers;
