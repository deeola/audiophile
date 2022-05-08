import React, { useContext, useEffect } from "react";
import Features from "../Shared/Features/Features";
import Generalwithimage from "../Shared/Generalwithimage";
import Goback from "../Shared/Goback";
import GridImage from "../Shared/GridImage/GridImage";
import ProductLike from "../Shared/Like/ProductLike";
import Shop from "../../shared/Shop/Shop";
import Gear from "../../Homey/Gear/Gear";
import ProductNav from "../../shared/Navbar/ProductNav";
import audioContext from "../../../context/Audiophile/audioContext";
import desktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";

// grid images

//top left
import TLgridimageDesktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import TLgridimageTablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg";
import TLgridimageMobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";

// bottom left
import BLgridimageDesktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import BLgridimageTablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg";
import BLgridimageMobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";

// RIGHT
import RgridimageDesktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import RgridimageTablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg";
import RgridimageMobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

//LIKE IMAGES

// product likes

//first like

import FLikeDesktop from "../../../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import FLikeTablet from "../../../assets/shared/tablet/tabheadphones.jpg";
import FLikeMobile from "../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";

//second like

import SLikeDesktop from "../../../assets/shared/desktop/image-xx59-headphones.jpg";
import SLikeTablet from "../../../assets/shared/tablet/image-xx59-headphones.jpg";
import SLikeMobile from "../../../assets/shared/mobile/image-xx59-headphones.jpg";

//third

import TLikeDesktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg";
import TLikeTablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg";
import TLikeMobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg";
import { ProductDetailsPage } from "./Headphonestyling";

const MarkOne = () => {
  //context

  const AudioContext = useContext(audioContext);

  //destructure audiocontext
  const {
    onAdd,
    quantity,
    decreaseQuantity,
    increaseQuantity,
    cartNotification,
  } = AudioContext;

  //Price, description and data
  let price;
  let data;
  let description;
  let others;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[2].price;
    description = AudioContext.data[2].description;
    data = AudioContext.data[2];
    others = AudioContext.data[2].others;
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);

  //image

  let image = desktop;
  let TLImage = TLgridimageDesktop;
  let BLImage = BLgridimageDesktop;
  let RImage = RgridimageDesktop;

  //Likes

  let FLimage = FLikeDesktop;
  let SLimage = SLikeDesktop;
  let TLimage = TLikeDesktop;

  if (window.innerWidth < 802) {
    image = tablet;
    TLImage = TLgridimageTablet;
    BLImage = BLgridimageTablet;
    RImage = RgridimageTablet;
    //LIKES
    FLimage = FLikeTablet;
    SLimage = SLikeTablet;
    TLimage = TLikeTablet;
  } else if (window.innerWidth < 490) {
    image = mobile;
    TLImage = TLgridimageMobile;
    BLImage = BLgridimageMobile;
    RImage = RgridimageMobile;

    //Likes

    FLimage = FLikeMobile;
    SLimage = SLikeMobile;
    TLimage = TLikeMobile;
  }

  // product like

  return (
    <div>
      <ProductNav />
      <ProductDetailsPage>
        <Goback />
        <Generalwithimage
          img={image}
          subtitle={description}
          title={"XX99 Mark I Headphones"}
          alt="markone"
          num={quantity}
          price={price}
          func={onAdd}
          increase={increaseQuantity}
          decrease={decreaseQuantity}
        />
        <Features
          qty4={"1x"}
          desc4={"3.5mm 5m Audio Cable"}
          qty3={"1x"}
          desc3={"User Manual"}
          qty2={"2x"}
          desc2={"Replacement Earcups"}
          qty1={"1x"}
          desc1={"Headphone Unit"}
          bottomtext={
            "From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector."
          }
          toptext={
            "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz."
          }
        />
        <GridImage topleft={TLImage} bottomleft={BLImage} rightimage={RImage} />
        <ProductLike
          title1={others !== undefined ? others[0].name : ""}
          title2={others !== undefined ? others[1].name : ""}
          title3={others !== undefined ? others[2].name : ""}
          link3={"/zx9"}
          img1={FLimage}
          img2={SLimage}
          img3={TLimage}
          link1={"/xx99-mark-two"}
          link2={"/xx59"}
        />
        <Shop />
        <Gear />
      </ProductDetailsPage>
    </div>
  );
};

export default MarkOne;
