import React from "react";

function SpeakerTwoEar(props) {
  return (
    <div>
      <div className="boXFeat" style={{ display: "flex" }}>
        <p className="boxquantity">{props.number}x</p>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default SpeakerTwoEar;
