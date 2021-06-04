import React, { useContext, useEffect} from "react";
import SpeakerOneFeatures from "./SpeakerOneFeatures";
import SpeakerOneImages from "./SpeakerOneImages";
import SpeakerOneLke from "./SpeakerOneLke";
import audioContext from "../../../../context/Audiophile/audioContext";

function SpeakerOnebody(props) {
  const AudioContext = useContext(audioContext);


  const onAdd= AudioContext.onAdd;
  const quantity = AudioContext.quantity;
  const decreaseQuantity = AudioContext.decreaseQuantity;
  const increaseQuantity = AudioContext.increaseQuantity;


  let data;
  if (AudioContext.data.length > 0) {
    data = AudioContext.data[5];
  }



  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[5].price;
  }


  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[5].description;
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);


  return (
    <div>
      <section className="HeadphoneSection productSection">
        <div className="HeadImageOne">
          <img className='desktop' src={require('../../../../assets/product-zx9-speaker/desktop/image-product.jpg').default} alt="speaker"></img>
          <img className='tablet' src={require('../../../../assets/product-zx9-speaker/tablet/image-product.jpg').default} alt="speaker"></img>
          <img className='mobile' src={require('../../../../assets/product-zx9-speaker/mobile/image-product.jpg').default} alt="speaker"></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">
            ZX9 SPEAKER
          </h2>
          <p className="sectionPara">
            {description !== undefined ? description : null}
          </p>
          <p className="price" style={{margin:'10px 0px', fontWeight:'700'}}>€{price !== undefined ? price : null}</p>
          <div className='buttonAddandRemove'>
            <div className='addandremove' >
              <p onClick={quantity > 1 ? decreaseQuantity : undefined}>-</p>
              <p>{quantity}</p>
              <p onClick={increaseQuantity}>+</p>
            </div>
            <button
            className='onAddbutton' 
              onClick={() => {
                onAdd(data);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </section>
      <SpeakerOneFeatures />
      <SpeakerOneImages />
      <SpeakerOneLke />
    </div>
  );
}

export default SpeakerOnebody;
