import React,{useEffect, useContext} from 'react'
import audioContext from '../../../context/Audiophile/audioContext'
import Generalwithimage from '../Shared/Generalwithimage'
import { ProductCont } from './Headphonestyling'

import desktop from "../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import tablet from "../../../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";


const MarkTwoProduct = () => {

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
    price = AudioContext.data[3].price;
    description = AudioContext.data[3].description;
    data = AudioContext.data[3];
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
        alt="mark-two-headphone"
        np={"NEW PRODUCT"}
        title={"XX 99 MARK II HEADPHONES"}
        
        
        />



    </ProductCont>
  )
}

export default MarkTwoProduct
