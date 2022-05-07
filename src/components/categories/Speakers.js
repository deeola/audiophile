import React from "react";
import HeaderShared from "./shared/HeaderShared";
import Footer from "../layouts/footer/Footer";
import SpeakerBody from "../Category/Speakers/SpeakerBody";
import Gear from '../../components/Homey/Gear/Gear'
import Shop from '../../components/shared/Shop/Shop'



function Speakers(props) {
  return (
    <div className="SpeakerMain">
      <HeaderShared title={'Speakers'} />
      <SpeakerBody />
      <Shop />

      <Gear />
      
      <Footer />
    </div>
  );

}



Speakers.propTypes = {};

export default Speakers;
