import React, { useContext, useEffect,useState } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import imageDesktop from '../../../../assets/product-zx9-speaker/desktop/image-product.jpg'
import SpeakerOneFeatures from "./SpeakerOneFeatures";
import SpeakerOneImages from "./SpeakerOneImages";
import SpeakerOneLke from "./SpeakerOneLke";

function SpeakerOnebody(props) {
  const AudioContext = useContext(audioContext);

  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[5].price;
  }

  //Slug
  let slug;
  if (AudioContext.data.length > 0) {
    slug = AudioContext.data[5].slug;
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
            <button>ADD TO CART</button>
          </div>
        </div>
      </section>
      <SpeakerOneFeatures />
      <SpeakerOneImages />
      <SpeakerOneLke />
    </div>
    )
}

export default SpeakerOnebody;