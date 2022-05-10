import React from "react";
import HomeEarphone from "../../Homey/Earphone/HomeEarphone";
import Gear from "../../Homey/Gear/Gear";
import DescriptionText from "../../Homey/Z7speakers/DescriptionText";
import SecondSpeaker from "../../Homey/Z7speakers/ZSspeaker";
import Zspeaker from "../../Homey/Zspeaker/Zspeaker";
import MarkOneProduct from "../../ProductDetails/Headphone/MarkOneProduct";
import Shop from "../../shared/Shop/Shop";
import Earphones from "./Earphones";
// import Gear from "./Gear";



function Main(props) {
  return (
    <div className="mybody">

      <Shop />
      <Zspeaker />
      <SecondSpeaker />
      <HomeEarphone />
      <Gear />
      
    </div>
  );
}

export default Main;


