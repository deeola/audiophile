import React from "react";
import speakerzx from "../../../assets/home/desktop/speakerzx.png";
import tabspeaker from "../../../assets/home/tablet/tabspeaker.png";

function Speaker(props) {
  const styles = {
    background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/pattern-circles.svg')`,
  };
  return (
    <section className="secondSection" style={styles}>
      <div className="zxspeaker">
        <img className="imagedesktop"  alt= 'speaker image' src={speakerzx}></img>
        <img className="imagetab"  alt= 'speaker image'  src={tabspeaker}></img>
      </div>
      <div className="secondTextDiv">
        <h1 className="sdMainText">
          ZX99 <br></br>SPEAKER
        </h1>
        <p className="sdproductDescr">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>See product</button>
      </div>
    </section>
  );
}

export default Speaker;
