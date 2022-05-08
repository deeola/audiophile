import React from "react";
import {
  BottomLeftImage,
  GridImageContainer,
  LeftImages,
  RightImage,
  RightImages,
  TopLeftImage,
} from "./gridimagestyling";

const GridImage = ({ topleft, rightimage, bottomleft }) => {
  return (
    <GridImageContainer>
      <LeftImages>
        <TopLeftImage src={topleft} alt="topleft" />
        <BottomLeftImage src={bottomleft} alt="bottomleft" />
      </LeftImages>
      <RightImages>
        <RightImage src={rightimage} alt="right" />
      </RightImages>
    </GridImageContainer>
  );
};

export default GridImage;
