import React, { useContext } from "react";
import audioContext from "../../context/Audiophile/audioContext";

function SecondLayer(props) {
  const AudioContext = useContext(audioContext);
  const slideMenu = AudioContext.slideMenu;

  return <div className="layer" style={slideMenu()}></div>;
}

export default SecondLayer;
