import React from "react";
import { Link } from "react-router-dom";

function Zspeaker(props) {
  return (
    <div className="zspeakermain">
      <div className="zspeakerDiv">
        <p className="zspeakertitle">ZX7 SPEAKER</p>
        <Link to="/zx7" className="shopTextLinkSecond">
          <button>SEE PRODUCT</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Zspeaker;
