import React, { useContext, useEffect } from "react";
import FeatureEar from "./FeatureEar";
import audioContext from "../../../context/Audiophile/audioContext";
import { v4 as uuidv4 } from 'uuid';

function EarpodFeatures(props) {
  const AudioContexts = useContext(audioContext);

  let features;

  if (AudioContexts.data.length > 0) {
    features = AudioContexts.data[0].features;
  }

  //includes

  let includes;

  if (AudioContexts.data.length > 0) {
    includes = AudioContexts.data[0].includes;

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
              <FeatureEar key={uuidv4()} number={feature.quantity} name={feature.item} />
            ))
          : null}
      </div>
    </div>
  );
}

export default EarpodFeatures;
