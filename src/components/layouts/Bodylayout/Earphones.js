import React from "react";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../Buttons/Button";

function Earphones(props) {
  return (
    <div className="earphonesDiv">
      <div className="earphoneImageDiv">
        <img
          className="earphonesDesktop"
          src={require("../../../assets/home/desktop/earphones.jpg").default}
          alt="earbud"
        ></img>
        <img
          style={{ display: "none" }}
          className="earphonetab"
          src={require("../../../assets/home/tablet/earphonestab.jpg").default}
          alt="earbud"
        ></img>
        <img
          style={{ display: "none" }}
          className="earphonesmobile"
          src={
            require("../../../assets/home/mobile/image-earphones-yx1.jpg")
              .default
          }
          alt="earbud"
        ></img>
      </div>
      <div className="earphoneTextDiv">
        <div className="earphoneText">
          <p>YX1 earphones</p>
          <SecondaryButton link={"/yx1"} label={'SEE PRODUCT'} />
        </div>
      </div>
    </div>
  );
}

export default Earphones;


