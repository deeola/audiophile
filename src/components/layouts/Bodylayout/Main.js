import React from "react";
import Earphones from "./Earphones";
import Gear from "./Gear";
import Shop from "./Shop";
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
