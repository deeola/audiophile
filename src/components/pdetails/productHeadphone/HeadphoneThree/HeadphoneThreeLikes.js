import React,{useEffect, useContext} from 'react';
import audioContext from '../../../../context/Audiophile/audioContext';
import firstimagedesktop from '../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg';
import thirdimagedesktop from '../../../../assets/shared/desktop/image-zx9-speaker.jpg';
import secondimagedesktop from "../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";

function HeadphoneThreeLikes(props) {
    const AudioContexts = useContext(audioContext);

  let others;

  if (AudioContexts.data.length > 0) {
    others = AudioContexts.data[1].others;

  }

  useEffect(() => {
    AudioContexts.getdata();
    // eslint-disable-next-line
  }, []);
    return (
        <div>
      <h4>YOU MAY ALSO LIKE</h4>
      <div style={{ display: "flex", margin: "auto", width: "80%" }}>
        <div style={{ width: "30%", display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center' }}>
          <img src={require('../../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/tablet/tabheadphones.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg').default} alt="imagedesktop"></img>
          <p>{others !== undefined ? others[0].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
        <div style={{ width: "30%", display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center' }}>
          <img src={require('../../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg').default} alt="imagedesktop"></img>
          <p>{others !== undefined ? others[1].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
        <div style={{ width: "30%", display:'flex', alignItems:'center', flexDirection:'column', justifyContent:'center' }}>
          <img src={require('../../../../assets/shared/desktop/image-zx9-speaker.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/tablet/image-zx9-speaker.jpg').default} alt="imagedesktop"></img>
          <img style={{display:'none'}} src={require('../../../../assets/shared/mobile/image-zx9-speaker.jpg').default} alt="imagedesktop"></img>
          <p>{others !== undefined ? others[2].name : null}</p>
          <button>SEE PRODUCT</button>
        </div>
      </div>
    </div>
    )
}


export default HeadphoneThreeLikes

