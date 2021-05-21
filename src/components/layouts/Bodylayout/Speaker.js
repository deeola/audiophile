import React from "react";

function Speaker(props) {
  const styles = {
    background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/pattern-circles.svg')`
  };
  return (
    <section className="secondSection" style={styles}>
      <div className="zxspeaker">
        <img
          alt="speaker image"
          src={"/assets/home/desktop/image-speaker-zx9.png"}
        ></img>
      </div>
      <div className="secondTextDiv">
        <h1 className="sdMainText">ZX99 <br></br>SPEAKER</h1>
        <p className="sdproductDescr">
        Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button>See product</button>
      </div>
    </section>
  );
}

export default Speaker;
