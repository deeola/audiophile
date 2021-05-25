import React, { useState, useEffect, useContext } from "react";
import imageDesktop from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";
import EarpodFeatures from "./EarpodFeatures";
import EarpodImages from "./EarpodImages";
import EarpodLike from "./EarpodLike";
import audioContext from "../../../context/Audiophile/audioContext";
function EarpodBody(props) {
  const AudioContext = useContext(audioContext);

  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[0].price;
  }

  //Slug
  let slug;
  if (AudioContext.data.length > 0) {
    slug = AudioContext.data[0].slug;
  }

  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[0].description;
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

      <EarpodFeatures />
      <EarpodImages />
      <EarpodLike />
    </div>
  );
}

export default EarpodBody;
