import React,{useEffect} from "react";
import Features from "../components/ProductDetails/Shared/Features/Features";
import Goback from "../components/ProductDetails/Shared/Goback";
import GridImage from "../components/ProductDetails/Shared/GridImage/GridImage";
import ProductLike from "../components/ProductDetails/Shared/Like/ProductLike";
import Shop from "../components/shared/Shop/Shop";
import Gear from "../components/Homey/Gear/Gear";
import ProductNav from "../components/shared/Navbar/ProductNav";



// grid images

//top left
import TLgridimageDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import TLgridimageTablet from "../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";
import TLgridimageMobile from "../assets/product-xx59-headphones/tablet/image-gallery-1.jpg";

// bottom left
import BLgridimageDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import BLgridimageTablet from "../assets/product-xx59-headphones/tablet/image-gallery-2.jpg";
import BLgridimageMobile from "../assets/product-xx59-headphones/mobile/image-gallery-2.jpg";

// RIGHT
import RgridimageDesktop from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import RgridimageTablet from "../assets/product-xx59-headphones/tablet/image-gallery-3.jpg";
import RgridimageMobile from "../assets/product-xx59-headphones/mobile/image-gallery-3.jpg";

//LIKE IMAGES

// product likes

//first like

import FLikeDesktop from "../assets/shared/desktop/image-xx99-mark-two-headphones.jpg";
import FLikeTablet from "../assets/shared/tablet/tabheadphones.jpg";
import FLikeMobile from "../assets/shared/mobile/image-xx99-mark-two-headphones.jpg";

//second like

import SLikeDesktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import SLikeTablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import SLikeMobile from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

//third

import TLikeDesktop from "../assets/shared/desktop/image-zx9-speaker.jpg";
import TLikeTablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import TLikeMobile from "../assets/shared/mobile/image-zx9-speaker.jpg";
import { ProductDetailsPage } from "../components/ProductDetails/Headphone/Headphonestyling";
import Footer from "../components/shared/Footer/Footer";
import MarkThreeProduct from "../components/ProductDetails/Headphone/MarkThreeProduct";

const MarkThree = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
 
  //image

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

  // product like
  return (
    <div>
      <ProductNav />
      <ProductDetailsPage>
        <Goback />
        <MarkThreeProduct />
        <Features
          qty4={"1x"}
          desc4={"3.5mm 5m Audio Cable"}
          qty3={"1x"}
          desc3={"User Manual"}
          qty2={"2x"}
          desc2={"Replacement Earcups"}
          qty1={"1x"}
          desc1={"Headphone Unit"}
          toptext={
            "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos."
          }
          bottomtext={
            "More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C."
          }
        />
        <GridImage topleft={TLImage} bottomleft={BLImage} rightimage={RImage} />
        <ProductLike
          title1={"XX99 MARK II"}
          title2={"XX99 MARK I"}
          title3={"ZX9 SPEAKER"}
          img1={FLimage}
          img2={SLimage}
          img3={TLimage}
          link3={"/zx9"}
          link1={"/xx99-mark-two"}
          link2={"/xx99-mark-one"}
        />
        <Shop />
        <Gear />
      </ProductDetailsPage>
      <Footer />
    </div>
  );
};

export default MarkThree;
