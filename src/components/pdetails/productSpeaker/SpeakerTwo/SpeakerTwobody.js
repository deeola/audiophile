import React, { useContext, useEffect, useState } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import imageDesktop from "../../../../assets/product-zx7-speaker/desktop/image-product.jpg";
import SpeakerTwoFeatures from "./SpeakerTwoFeatures";
import SpeakerTwoImages from "./SpeakerTwoImages";
import SpeakerTwoLikes from "./SpeakerTwoLikes";

function SpeakerTwobody(props) {


  const AudioContext = useContext(audioContext);

  const carty = AudioContext.onAdd;


  console.log(AudioContext.cartItems)

  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[4].price;
  }

  //Slug
  let slug;
  if (AudioContext.data.length > 0) {
    slug = AudioContext.data[4].slug;
  }

  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[4].description;
  }

  //DATA

  let data;
  if (AudioContext.data.length > 0) {
    data = AudioContext.data[4];
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);

  const [quantity, setquantity] = useState(1);

  const increaseQuantity = () => setquantity(quantity + 1);
  const decreaseQuantity = () => setquantity(quantity - 1);
  return (
    <div>
      <section className="HeadphoneSection">
        <div className="HeadImageOne">
          <img src={imageDesktop} alt="speaker"></img>
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
            <button onClick={() => carty(data)}>ADD TO CART</button>
          </div>
        </div>
      </section>
      <SpeakerTwoFeatures />
      <SpeakerTwoImages />
      <SpeakerTwoLikes />
    </div>
  );
}

export default SpeakerTwobody;
