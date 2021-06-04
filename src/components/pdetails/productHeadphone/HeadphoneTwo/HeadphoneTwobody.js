import React, { useEffect, useContext } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
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
      <section className="HeadphoneSection productSection">
        <div className="HeadImageOne">
          <img className='desktop' src={require('../../../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg').default} alt="speaker"></img>
          <img className='tablet' src={require('../../../../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg').default} alt="speaker"></img>
          <img className='mobile' src={require('../../../../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg').default} alt="speaker"></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">
          XX 99 MARK TWO HEADPHONES
          </h2>
          <p className="sectionPara">
            {description !== undefined ? description : null}
          </p>
          <p  className="price" style={{margin:'10px 0px', fontWeight:'700'}}>€{price !== undefined ? price : null}</p>
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
      <HeadphoneTwoFeatures />
      <HeadphoneTwoImages />
      <HeadphoneTwoLikes />
    </div>
  );
}

export default HeadphoneTwobody;
