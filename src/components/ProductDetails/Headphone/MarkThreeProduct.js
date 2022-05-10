import React, { useContext, useEffect } from "react";
import Generalwithimage from "../Shared/Generalwithimage";
import { ProductCont } from "./Headphonestyling";

import audioContext from "../../../context/Audiophile/audioContext";
import desktop from "../../../assets/product-xx59-headphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-xx59-headphones/tablet/image-product.jpg";
import tablet from "../../../assets/product-xx59-headphones/mobile/image-product.jpg";

const MarkThreeProduct = () => {
  const AudioContext = useContext(audioContext);

  //destructure audiocontext
  const {
    onAdd,
    quantity,
    decreaseQuantity,
    increaseQuantity,
    cartNotification,
  } = AudioContext;

  //Price, data and description from useContext
  let price;
  let description;
  let data;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[1].price;
    description = AudioContext.data[1].description;
    data = AudioContext.data[1];
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);

  //image

  let image = desktop;

  if (window.innerWidth < 802) {
    image = tablet;
  } else if (window.innerWidth < 490) {
    image = mobile;
  }

  return (
    <ProductCont>
      <Generalwithimage
        increase={increaseQuantity}
        decrease={decreaseQuantity}
        num={quantity}
        func={() => onAdd(data)}
        subtitle={description}
        price={price}
        img={image}
        alt="xx-59-headphone"
        title={"XX 59 HEADPHONES"}
      />
    </ProductCont>
  );
};

export default MarkThreeProduct;
