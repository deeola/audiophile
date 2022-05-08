import React from "react";
import { FeatureContainer } from "./featurestyling";
import FeatureTexts from "./FeatureTexts";
import InTheBox from "./InTheBox";

const Features = ({
  toptext,
  bottomtext,
  qty1,
  qty2,
  qty3,
  qty4,
  qty5,
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
}) => {
  return (
    <FeatureContainer>
      <FeatureTexts toptext={toptext} bottomtext={bottomtext} />
      <InTheBox
        qty1={qty1}
        qty2={qty2}
        qty3={qty3}
        qty4={qty4}
        qty5={qty5}
        desc1={desc1}
        desc2={desc2}
        desc3={desc3}
        desc4={desc4}
        desc5={desc5}
      />
    </FeatureContainer>
  );
};

export default Features;
