import React,{useEffect} from "react";

// grid images

//top left
import TLgridimageDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import TLgridimageTablet from "../assets/product-zx9-speaker/tablet/image-gallery-1.jpg";
import TLgridimageMobile from "../assets/product-zx9-speaker/tablet/image-gallery-1.jpg";

// bottom left
import BLgridimageDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import BLgridimageTablet from "../assets/product-zx9-speaker/tablet/image-gallery-2.jpg";
import BLgridimageMobile from "../assets/product-zx9-speaker/mobile/image-gallery-2.jpg";

// RIGHT
import RgridimageDesktop from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import RgridimageTablet from "../assets/product-zx9-speaker/tablet/image-gallery-3.jpg";
import RgridimageMobile from "../assets/product-zx9-speaker/mobile/image-gallery-3.jpg";

//LIKE IMAGES

// product likes

//first like

import FLikeDesktop from "../assets/shared/desktop/image-zx7-speaker.jpg";
import FLikeTablet from "../assets/shared/tablet/image-zx7-speaker.jpg";
import FLikeMobile from "../assets/shared/mobile/image-zx7-speaker.jpg";

//second like

import SLikeDesktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import SLikeTablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import SLikeMobile from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

//third

import TLikeDesktop from "../assets/shared/desktop/image-zx9-speaker.jpg";
import TLikeTablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import TLikeMobile from "../assets/shared/mobile/image-zx9-speaker.jpg";

import { ProductDetailsPage } from "../components/ProductDetails/Headphone/Headphonestyling";
import SpeakerOneProduct from "../components/ProductDetails/Speaker/SpeakerOneProduct";
import Footer from "../components/shared/Footer/Footer";
import Goback from "../components/ProductDetails/Shared/Goback";
import Features from "../components/ProductDetails/Shared/Features/Features";
import GridImage from "../components/ProductDetails/Shared/GridImage/GridImage";
import ProductLike from "../components/ProductDetails/Shared/Like/ProductLike";
import Shop from "../components/shared/Shop/Shop";
import Gear from "../components/Homey/Gear/Gear";
import ProductNav from "../components/shared/Navbar/ProductNav";

const Speakerone = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  let TLImage = TLgridimageDesktop;
  let BLImage = BLgridimageDesktop;
  let RImage = RgridimageDesktop;

  //Likes

  let FLimage = FLikeDesktop;
  let SLimage = SLikeDesktop;
  let TLimage = TLikeDesktop;

  if (window.innerWidth < 802) {
    TLImage = TLgridimageTablet;
    BLImage = BLgridimageTablet;
    RImage = RgridimageTablet;
    //LIKES
    FLimage = FLikeTablet;
    SLimage = SLikeTablet;
    TLimage = TLikeTablet;
  } else if (window.innerWidth < 490) {
    TLImage = TLgridimageMobile;
    BLImage = BLgridimageMobile;
    RImage = RgridimageMobile;

    //Likes

    FLimage = FLikeMobile;
    SLimage = SLikeMobile;
    TLimage = TLikeMobile;
  }
  return (
    <div>
      <ProductNav />
      <ProductDetailsPage>
        <Goback />
        <SpeakerOneProduct />
        <Features
          qty5={"1x"}
          desc5={"10m Optical Cable"}
          qty4={"1x"}
          desc4={"3.5mm 5m Audio Cable"}
          qty3={"1x"}
          desc3={"User Manual"}
          qty2={"2x"}
          desc2={"Speaker Cloth Panel"}
          qty1={"2x"}
          desc1={"Speaker Unit"}
          toptext={
            "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m)."
          }
          bottomtext={
            "Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms."
          }
        />
        <GridImage topleft={TLImage} bottomleft={BLImage} rightimage={RImage} />
        <ProductLike
          title1={"ZX7 SPEAKER"}
          title2={"XX99 MARK I"}
          title3={"XX59"}
          img1={FLimage}
          img2={SLimage}
          img3={TLimage}
          link3={"/xx59"}
          link1={"/zx7"}
          link2={"/xx99-mark-two"}
        />
        <Shop />
        <Gear />
      </ProductDetailsPage>
      <Footer />
    </div>
  );
};

export default Speakerone;
