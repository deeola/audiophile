import React,{useEffect,useContext,useState} from 'react';
import audioContext from "../../../../context/Audiophile/audioContext";
import imageDesktop from "../../../../assets/product-xx59-headphones/desktop/image-product.jpg";
import HeadphoneThreeFeatures from './HeadphoneThreeFeatures';
import HeadphoneThreeImages from './HeadphoneThreeImages';
import HeadphoneThreeLikes from './HeadphoneThreeLikes';


function HeadphoneThreebody(props) {

  const {onAdd} = props
    const AudioContext = useContext(audioContext);

  //Price
  let price;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[2].price;
  }

  //Slug
  let slug;
  if (AudioContext.data.length > 0) {
    slug = AudioContext.data[1].slug;
  }

  //Description

  let description;

  if (AudioContext.data.length > 0) {
    description = AudioContext.data[1].description;
  }

  //DATA

  let data;
  if (AudioContext.data.length > 0) {
    data = AudioContext.data[1];
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
            <button onClick={() => onAdd(data)} >ADD TO CART</button>
          </div>
        </div>
      </section>
      <HeadphoneThreeFeatures />
      <HeadphoneThreeImages />
      <HeadphoneThreeLikes />
            
        </div>
    )
}


export default HeadphoneThreebody

