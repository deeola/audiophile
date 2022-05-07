import React from "react";
import ProductWithImage from "../shared/ProductWithImage";
import { SpeakerCont } from "./Speakerstyling";

import Z7desktop from "../../../assets/category-speakers/desktop/image-zx9.jpg";
import Z9desktop from "../../../assets/category-speakers/desktop/image-zx7.jpg";

import Z7tablet from "../../../assets/category-speakers/tablet/image-zx9.jpg";
import Z9tablet from "../../../assets/category-speakers/tablet/image-zx7.jpg";

import Z7mobile from "../../../assets/category-speakers/mobile/image-zx9.jpg";
import Z9mobile from "../../../assets/category-speakers/mobile/image-zx7.jpg";

const SpeakerBody = () => {
  // use inner width to determine image soure
  let Z9speaker = Z7desktop;
  let Z7speaker = Z9desktop;

  if (window.innerWidth < 802) {
    Z9speaker = Z7tablet;
    Z7speaker = Z9tablet;
  } else if (window.innerWidth < 490) {
    Z9speaker = Z7mobile;
    Z7speaker = Z9mobile;
  }

  return (
    <SpeakerCont data-testid='speaker'>
      <ProductWithImage
        link="/zx9"
        img={Z9speaker}
        label="SEE PRODUCT"
        np={"NEW PRODUCT"}
        title="ZX9 speakers"
        subtitle={
          "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
        }
      />
      <ProductWithImage
        primary
        link="/zx7"
        img={Z7speaker}
        label="SEE PRODUCT"
        title="ZX7 speaker"
        subtitle={
          " Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        }
      />
    </SpeakerCont>
  );
};

export default SpeakerBody;
