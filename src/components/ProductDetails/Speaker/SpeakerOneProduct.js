import React, { useContext, useEffect } from "react";
import Generalwithimage from "../Shared/Generalwithimage";


import audioContext from "../../../context/Audiophile/audioContext";
import desktop from "../../../assets/product-zx9-speaker/desktop/image-product.jpg";
import mobile from "../../../assets/product-zx9-speaker/tablet/image-product.jpg";
import tablet from "../../../assets/product-zx9-speaker/mobile/image-product.jpg";
import { ProductCont } from "../Headphone/Headphonestyling";

const SpeakerOneProduct = () => {
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
      price = AudioContext.data[5].price;
      description = AudioContext.data[5].description;
      data = AudioContext.data[5];
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
          np={"NEW PRODUCT"}
          alt="zx9-speaker"
          title={"ZX9 SPEAKER"}
        />
      </ProductCont>
    );
}

export default SpeakerOneProduct;

