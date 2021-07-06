import React, { useEffect, useContext } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import { v4 as uuidv4 } from "uuid";
import HeadphoneTwoEar from "./HeadphoneTwoEar";

function HeadphoneTwoFeatures(props) {
  const AudioContexts = useContext(audioContext);

  let features;
  let includes;

  if (AudioContexts.data.length > 0) {
    includes = AudioContexts.data[3].includes;
    features = AudioContexts.data[3].features;
  }

  useEffect(() => {
    AudioContexts.getdata();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="FeatureDiv">
      <div className="featureDescription">
        <h4>FEATURES</h4>
        <p className="featurePara">
          {features !== undefined ? features : null}
        </p>
      </div>
      <div className="FeatureBox">
        <h4>IN THE BOX</h4>
        <div className="divFeat">
          {includes !== undefined
            ? includes.map((feature) => (
                <HeadphoneTwoEar
                  key={uuidv4()}
                  number={feature.quantity}
                  name={feature.item}
                />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default HeadphoneTwoFeatures;
