import React from "react";
import Shop from "../../shared/Shop/Shop";
import Earphones from "./Earphones";
import Gear from "./Gear";
import Speaker from "./Speaker";
import Zspeaker from "./Zspeaker";

function Main(props) {
  return (
    <div className="mybody">

      <Shop />
      <Speaker />
      <Zspeaker />
      <Earphones />
      <Gear />
    </div>
  );
}

export default Main;
