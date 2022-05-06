import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../Buttons/Button";

function Zspeaker(props) {
  return (
    <div className="zspeakermain">
      <div className="zspeakerDiv">
        <p className="zspeakertitle">ZX7 SPEAKER</p>
        <SecondaryButton link={"/zx7"} label={'SEE PRODUCT'} />
      </div>
    </div>
  );
}

export default Zspeaker;


