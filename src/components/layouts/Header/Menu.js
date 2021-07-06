import React, { useContext } from "react";
import Shop from "../Bodylayout/Shop";
import audioContext from "../../../context/Audiophile/audioContext";

function Menu(props) {
  const AudioContext = useContext(audioContext);
  const slideMenu = AudioContext.slideMenu;
  return (
    <div>
      <div className="menu" style={slideMenu()}>
        <Shop />
      </div>
    </div>
  );
}

export default Menu;
