import React, { useEffect, useContext, useState } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import imageDesktop from "../../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import HeadphoneTwoFeatures from "./HeadphoneTwoFeatures";
import HeadphoneTwoImages from "./HeadphoneTwoImages";
import HeadphoneTwoLikes from "./HeadphoneTwoLikes";

function HeadphoneTwobody(props) {

  const AudioContext = useContext(audioContext);

  const onAdd= AudioContext.onAdd;
  const quantity = AudioContext.quantity;
  const decreaseQuantity = AudioContext.decreaseQuantity;
  const increaseQuantity = AudioContext.increaseQuantity;

  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[3].price;
  }

  //Slug
  let slug;
  if (AudioContext.data.length > 0) {
    slug = AudioContext.data[3].slug;
  }

  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[3].description;
  }
  //DATA

  let data;
  if (AudioContext.data.length > 0) {
    data = AudioContext.data[3];
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={require('../../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg').default} alt="speaker"></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg').default} alt="speaker"></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg').default} alt="speaker"></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">
            {slug !== undefined ? slug : null}
          </h2>
          <p className="sectionPara">
            {description !== undefined ? description : null}
          </p>
          <p className="price">{price !== undefined ? price : null}</p>
          <div>
            <div>
              <p onClick={quantity > 1 ? decreaseQuantity : undefined}>-</p>
              <p>{quantity}</p>
              <p onClick={increaseQuantity}>+</p>
            </div>
            <button onClick={() => onAdd(data)}>ADD TO CART</button>
          </div>
        </div>
      </section>
      <HeadphoneTwoFeatures />
      <HeadphoneTwoImages />
      <HeadphoneTwoLikes />
    </div>
  );
}

export default HeadphoneTwobody;
