import React, { useEffect, useContext } from "react";
import EarpodFeatures from "./EarpodFeatures";
import EarpodImages from "./EarpodImages";
import EarpodLike from "./EarpodLike";
import audioContext from "../../../context/Audiophile/audioContext";
function EarpodBody(props) {


  const AudioContext = useContext(audioContext);
  const onAdd= AudioContext.onAdd;
  const quantity = AudioContext.quantity;
  const decreaseQuantity = AudioContext.decreaseQuantity;
  const increaseQuantity = AudioContext.increaseQuantity;


  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[0].price;
  }

  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[0].description;
  }

  //DATA

  // //Price
  let data;
  if (AudioContext.data.length > 0) {
    data = AudioContext.data[0];
  }


  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);





  return (
    <div>
      <section className="HeadphoneSection productSection">
        <div className="HeadImageOne">
          <img className='desktop' src={require('../../../assets/product-yx1-earphones/desktop/image-product.jpg').default} alt="earpodxy"></img>
          <img className='tablet' src={require('../../../assets/product-yx1-earphones/tablet/image-product.jpg').default} alt="earpodxy"></img>
          <img  className='mobile' src={require('../../../assets/product-yx1-earphones/mobile/image-product.jpg').default} alt="earpodxy"></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">
            YX1 EARPHONES
          </h2>
          <p className="sectionPara">
            {description !== undefined ? description : null}
          </p>
          <p className="price" style={{margin:'10px 0px', fontWeight:'700'}}>€{price !== undefined ? price : null}</p>
          <div className='buttonAddandRemove'>
            <div className='addandremove'>
              <p onClick={quantity > 1 ? decreaseQuantity : undefined}>-</p>
              <p>{quantity}</p>
              <p onClick={increaseQuantity}>+</p>
            </div>
            <button className='onAddbutton' onClick={() => onAdd(data)}>ADD TO CART</button>
          </div>
        </div>
      </section>

      <EarpodFeatures />
      <EarpodImages />
      <EarpodLike />
    </div>
  );
}

export default EarpodBody;
