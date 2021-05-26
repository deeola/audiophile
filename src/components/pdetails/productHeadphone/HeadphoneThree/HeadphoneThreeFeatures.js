import React,{useContext,useEffect} from 'react';
import audioContext from "../../../../context/Audiophile/audioContext";
import { v4 as uuidv4 } from 'uuid';
import HeadphoneThreeEar from './HeadphoneThreeEar';

function HeadphoneThreeFeatures(props) {
    const AudioContexts = useContext(audioContext);

    let features;
  
    if (AudioContexts.data.length > 0) {
      features = AudioContexts.data[1].features;
    }
  
    //includes
  
    let includes;
  
    if (AudioContexts.data.length > 0) {
      includes = AudioContexts.data[1].includes;
  
    }
  
    useEffect(() => {
      AudioContexts.getdata();
       // eslint-disable-next-line
    }, []);
    return (
        <div style={{ display: "flex", width: "80%", margin: "auto" }}>
      <div style={{ width: "50%" }}>
        <h4>Features</h4>
        {features !== undefined ? features : null}
      </div>
      <div style={{ width: "50%" }}>
        <h4>IN THE BOX</h4>
        {includes !== undefined
          ? includes.map((feature) => (
              <HeadphoneThreeEar key={uuidv4()} number={feature.quantity} name={feature.item} />
            ))
          : null}
      </div>

    </div>
    )
}

export default HeadphoneThreeFeatures

