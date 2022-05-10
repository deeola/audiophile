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
import desktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";
import tablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";

// grid images

//top left
import TLgridimageDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import TLgridimageTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";
import TLgridimageMobile from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-1.jpg";

// bottom left
import BLgridimageDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import BLgridimageTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import BLgridimageMobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-2.jpg";

// RIGHT
import RgridimageDesktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import RgridimageTablet from "../../../assets/product-xx99-mark-two-headphones/tablet/image-gallery-3.jpg";
import RgridimageMobile from "../../../assets/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";

//LIKE IMAGES

// product likes

//first like

import FLikeDesktop from "../../../assets/shared/desktop/image-xx99-mark-one-headphones.jpg";
import FLikeTablet from "../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg";
import FLikeMobile from "../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg";

//second like

import SLikeDesktop from "../../../assets/shared/desktop/image-xx59-headphones.jpg";
import SLikeTablet from "../../../assets/shared/tablet/image-xx59-headphones.jpg";
import SLikeMobile from "../../../assets/shared/mobile/image-xx59-headphones.jpg";

//third

import TLikeDesktop from "../../../assets/shared/desktop/image-zx9-speaker.jpg";
import TLikeTablet from "../../../assets/shared/tablet/image-zx9-speaker.jpg";
import TLikeMobile from "../../../assets/shared/mobile/image-zx9-speaker.jpg";
import { ProductDetailsPage } from "./Headphonestyling";
import Footer from "../../shared/Footer/Footer";
import MarkTwoProduct from "./MarkTwoProduct";

const MarkTwo = () => {
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
    price = AudioContext.data[3].price;
    description = AudioContext.data[3].description;
    data = AudioContext.data[3];
    others = AudioContext.data[3].others;
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
        <MarkTwoProduct />
        <Features
          qty5={"1x"}
          desc5={"Travel Bag"}
          qty4={"1x"}
          desc4={"3.5mm 5m Audio Cable"}
          qty3={"1x"}
          desc3={"User Manual"}
          qty2={"2x"}
          desc2={"Replacement Earcups"}
          qty1={"1x"}
          desc1={"Headphone Unit"}
          toptext={
            "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat."
          }
          bottomtext={
            "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic."
          }
        />
        <GridImage topleft={TLImage} bottomleft={BLImage} rightimage={RImage} />
        <ProductLike
          title1={"XX99 MARK I"}
          title2={"XX59"}
          title3={"ZX9 SPEAKER"}
          img1={FLimage}
          img2={SLimage}
          img3={TLimage}
          link3={"/zx9"}
          link1={"/xx99-mark-one"}
          link2={"/xx59"}
        />
        <Shop />
        <Gear />
      </ProductDetailsPage>
      <Footer />
    </div>
  );
};

export default MarkTwo;
