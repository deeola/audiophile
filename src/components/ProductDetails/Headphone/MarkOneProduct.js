import React, { useContext, useEffect } from "react";
import Generalwithimage from "../Shared/Generalwithimage";
import { ProductCont } from "./Headphonestyling";
import audioContext from "../../../context/Audiophile/audioContext";
import desktop from "../../../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";


const MarkOneProduct = () => {
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
    price = AudioContext.data[2].price;
    description = AudioContext.data[2].description;
    data = AudioContext.data[2];
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
        decrease={ decreaseQuantity}
        num={quantity}
        func={() => onAdd(data)}
        subtitle={description}
        price={price}
        img={image}
        alt="mark-one-headphone"
        np={"NEW PRODUCT"}
        title={"XX 99 MARK I HEADPHONES"}
      />
    </ProductCont>
  );
};

export default MarkOneProduct;
