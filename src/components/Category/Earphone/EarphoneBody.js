import React from "react";
import ProductWithImage from "../shared/ProductWithImage";
import { EarphonCont } from "./Earphonestyling";
import earphonedesktop from "../../../assets/category-earphones/desktop/earphoneDesktop.jpg";

import earphonetablet from "../../../assets/category-earphones/tablet/image-yx1-earphones.jpg";
import earphonemobile from "../../../assets/category-earphones/mobile/image-yx1-earphones.jpg";

const EarphoneBody = () => {
  // use inner width to determine image soure
  let earphoneimage = earphonedesktop;

  if (window.innerWidth < 802) {
    earphoneimage = earphonetablet;
  } else if (window.innerWidth < 490) {
    earphoneimage = earphonemobile;
  }
  return (
    <EarphonCont data-testid='earphone'>
      <ProductWithImage
        link="/yx1"
        img={earphoneimage}
        label="SEE PRODUCT"
        np={"NEW PRODUCT"}
        title="YX1 wireless earphones"
        subtitle={
          "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
        }
      />
    </EarphonCont>
  );
};

export default EarphoneBody;
