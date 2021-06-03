import React,{useEffect,useContext} from 'react';
import audioContext from "../../../../context/Audiophile/audioContext";

import { v4 as uuidv4 } from 'uuid';
import SpeakerOneEar from './SpeakerOneEar';


function SpeakerOneFeatures(props) {

    const AudioContexts = useContext(audioContext);

    let features;
  
    if (AudioContexts.data.length > 0) {
      features = AudioContexts.data[5].features;
    }
  
    //includes
  
    let includes;
  
    if (AudioContexts.data.length > 0) {
      includes = AudioContexts.data[5].includes;
  
    }
  
    useEffect(() => {
      AudioContexts.getdata();
       // eslint-disable-next-line
    }, []);
    return (
        <div className='FeatureDiv'>
      <div className='featureDescription'>
        <h4>FEATURES</h4>
        <p className='featurePara'>{features !== undefined ? features : null}</p>
      </div>
      <div className='FeatureBox'>
        <h4>IN THE BOX</h4>
        <div className='divFeat'>
        {includes !== undefined
          ? includes.map((feature) => (
              <SpeakerOneEar key={uuidv4()} number={feature.quantity} name={feature.item} />
            ))
          : null}
          </div>
      </div>
    </div>
    )
}


export default SpeakerOneFeatures

