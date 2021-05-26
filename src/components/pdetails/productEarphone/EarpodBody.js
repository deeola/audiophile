import React, { useState, useEffect, useContext } from "react";
import imageDesktop from "../../../assets/product-yx1-earphones/desktop/image-product.jpg";
import EarpodFeatures from "./EarpodFeatures";
import EarpodImages from "./EarpodImages";
import EarpodLike from "./EarpodLike";
import audioContext from "../../../context/Audiophile/audioContext";
function EarpodBody(props) {
  const {onAdd, onRemove} = props;

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

  const [quantity, setquantity] = useState(1);

  const increaseQuantity = () => setquantity(quantity + 1);
  const decreaseQuantity = () => setquantity(quantity - 1);


  // //CART ITEMS
  // const [cartItems, setCartItems] = useState([]);

  // const onAdd = (product) => {
  //   const exist = cartItems.find( x => x.id === product.id);

  //   if (exist) {
  //     setCartItems(
  //       cartItems.map((x) =>
  //         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
  //       )
  //     );
  //   } else{
  //     setCartItems([...cartItems, {...data, qty:1}])
  //   }
  // };

  // console.log(onAdd)

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
              <p  onClick={quantity > 1 ? decreaseQuantity : undefined}>-</p>
              <p>{quantity}</p>
              <p  onClick={increaseQuantity}>+</p>
            </div>
            <button onClick={() => onAdd(data)}>ADD TO CART</button>
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
