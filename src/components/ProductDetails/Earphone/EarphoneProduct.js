import React,{useEffect, useContext} from 'react'
import audioContext from '../../../context/Audiophile/audioContext'
import Generalwithimage from '../Shared/Generalwithimage'


import desktop from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";
import mobile from "../../../assets/product-yx1-earphones/mobile/image-product.jpg";
import tablet from "../../../assets/product-yx1-earphones/tablet/image-product.jpg";
import { ProductCont } from '../Headphone/Headphonestyling';


const EarphoneProduct = () => {
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
      price = AudioContext.data[0].price;
      description = AudioContext.data[0].description;
      data = AudioContext.data[0];
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
          alt="xyx1 wireless earphone"
          np={"NEW PRODUCT"}
          title={"XYX1 WIRELES EARPHONES"}
          
          
          />
  
  
  
      </ProductCont>
    )
}

export default EarphoneProduct