import React from "react";
import imageheadphone from "../../../assets/shared/desktop/imageheadphones.png";
import imagespeaker from "../../../assets/shared/desktop/imagespeakers.png";
import imageearphone from "../../../assets/shared/desktop/imageearphones.png";
import SingleMenu from "../MobileMenu/SingleMenu";
import { ShopContainer } from "./ShopStyling";

const Shop = () => {
  return (
    <ShopContainer data-testid="shop">
      <SingleMenu
      mobile
        label="HEADPHONES"
        img={imageheadphone}
        alt={"headphone"}
        link={"/heaphones"}
      />
      <SingleMenu
      mobile
        label="SPEAKERS"
        img={imagespeaker}
        alt={"speaker"}
        link={"/speakers"}
      />
      <SingleMenu
      mobile
        label="EARPHONES"
        img={imageearphone}
        alt={"earphone"}
        link={"/earphones"}
      />
    </ShopContainer>
  );
};

export default Shop;





