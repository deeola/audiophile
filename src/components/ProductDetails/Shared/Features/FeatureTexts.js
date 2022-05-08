import React from "react";
import { FeatureTextContainer, Text, TextContainer, Title } from "./featurestyling";

const FeatureTexts = ({ toptext, bottomtext }) => {
  return (
    <FeatureTextContainer>
      <Title>FEATURES</Title>
      <TextContainer>
        <Text>{toptext}</Text>
        <Text>{bottomtext}</Text>
      </TextContainer>
    </FeatureTextContainer>
  );
};

export default FeatureTexts;
