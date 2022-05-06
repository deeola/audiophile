import React from "react";
import Zspeaker from "../../Homey/Zspeaker/Zspeaker";
import Shop from "../../shared/Shop/Shop";
import Earphones from "./Earphones";
import Gear from "./Gear";



function Main(props) {
  return (
    <div className="mybody">

      <Shop />
      <Zspeaker />
      {/* <Speaker />
      <Zspeaker /> */}
      <Earphones />
      <Gear />
    </div>
  );
}

export default Main;


