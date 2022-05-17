import React,{useEffect} from "react";

// grid images

//top left
import TLgridimageDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import TLgridimageTablet from "../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";
import TLgridimageMobile from "../assets/product-yx1-earphones/tablet/image-gallery-1.jpg";

// bottom left
import BLgridimageDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import BLgridimageTablet from "../assets/product-yx1-earphones/tablet/image-gallery-2.jpg";
import BLgridimageMobile from "../assets/product-yx1-earphones/mobile/image-gallery-2.jpg";

// RIGHT
import RgridimageDesktop from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";
import RgridimageTablet from "../assets/product-yx1-earphones/tablet/image-gallery-3.jpg";
import RgridimageMobile from "../assets/product-yx1-earphones/mobile/image-gallery-3.jpg";

//LIKE IMAGES

// product likes

//first like

import FLikeDesktop from "../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import FLikeTablet from "../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import FLikeMobile from "../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

//second like

import SLikeDesktop from "../assets/shared/desktop/image-xx59-headphones.jpg";
import SLikeTablet from "../assets/shared/tablet/image-xx59-headphones.jpg";
import SLikeMobile from "../assets/shared/mobile/image-xx59-headphones.jpg";

//third

import TLikeDesktop from "../assets/shared/desktop/image-zx9-speaker.jpg";
import TLikeTablet from "../assets/shared/tablet/image-zx9-speaker.jpg";
import TLikeMobile from "../assets/shared/mobile/image-zx9-speaker.jpg";

import { ProductDetailsPage } from "../components/ProductDetails/Headphone/Headphonestyling";

import Footer from "../components/shared/Footer/Footer";
import Goback from "../components/ProductDetails/Shared/Goback";
import Features from "../components/ProductDetails/Shared/Features/Features";
import GridImage from "../components/ProductDetails/Shared/GridImage/GridImage";
import ProductLike from "../components/ProductDetails/Shared/Like/ProductLike";
import Shop from "../components/shared/Shop/Shop";
import Gear from "../components/Homey/Gear/Gear";
import ProductNav from "../components/shared/Navbar/ProductNav";
import EarphoneProduct from "../components/ProductDetails/Earphone/EarphoneProduct";

const Earphone = () => {
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
          <EarphoneProduct />
          <Features
            qty5={"1x"}
            desc5={"Travel Pouch"}
            qty4={"1x"}
            desc4={"USB-C Charging Cable"}
            qty3={"1x"}
            desc3={"User Manual"}
            qty2={"6x"}
            desc2={"Multi-size Earplugs"}
            qty1={"2x"}
            desc1={"Earphone Unit"}
            toptext={'Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.'}
            bottomtext={'The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.'}
          />
          <GridImage topleft={TLImage} bottomleft={BLImage} rightimage={RImage} />
          <ProductLike
            title1={"XX99 MARK I"}
            title2={"XXX59"}
            title3={"ZX9 SPEAKER"}
            img1={FLimage}
            img2={SLimage}
            img3={TLimage}
            link2={"/xx59"}
            link1={"/xx99-mark-one"}
            link3={"/zx9"}
          />
          <Shop />
          <Gear />
        </ProductDetailsPage>
        <Footer />
      </div>
    );
}

export default Earphone