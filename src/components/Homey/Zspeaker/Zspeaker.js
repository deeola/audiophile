import React from "react";
import Description from "./Description";
import {
  Zimage,
  ZspeakerConatiner,
  DescriptionImageWrapper,
} from "./Zspeakerstyling";
import desktop from "../../../assets/home/desktop/speakerzx.png";
import tablet from "../../../assets/home/tablet/tabspeaker.png";
import mobile from "../../../assets/home/mobile/image-speaker-zx9.png";

const Zspeaker = () => {
  //use window width to deternine image source
  let src = desktop;

  if (window.innerWidth < 802) {
    src = tablet;
  } else if (window.innerWidth < 490) {
    src = mobile;
  }

  return (
    <ZspeakerConatiner>
      <DescriptionImageWrapper data-testid='descriptionimage'>
        <Zimage src={src} alt="photo" />
        <Description
          title={"ZX9 SPEAKER"}
          subtitle={
            "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."
          }
        />
      </DescriptionImageWrapper>
    </ZspeakerConatiner>
  );
};

export default Zspeaker;
