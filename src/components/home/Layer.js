import React, { useContext } from "react";
import audioContext from "../../context/Audiophile/audioContext";

function Layer(props) {
  const AudioContext = useContext(audioContext);
  const openBucket = AudioContext.openBucket;

  return <div className="layer" style={openBucket()}></div>;
}

export default Layer;
