import React from "react";
import backgroundPattern from "../../../assets/home/desktop/pattern-circles.svg";

function Speaker(props) {
  const styles = {
    
  background: '#d87d4a',
  backgroundImage: `url(${backgroundPattern})`,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  position: 'relative',
  margin: '98px auto auto auto',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  overflow: 'hidden',
  
  };
  return (
    <section className="secondSection" style={styles}>
      <div className="zxspeaker">
        <img className="imagedesktop"  alt= 'speakerdesktop' src={require('../../../assets/home/desktop/speakerzx.png').default}></img>
        <img className="imagetab"  alt= 'speakertab'  src={require('../../../assets/home/tablet/tabspeaker.png').default}></img>
        <img style={{display:'none'}}  className="imagemobile"  alt= 'speakertab'  src={require('../../../assets/home/mobile/image-speaker-zx9.png').default}></img>
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
