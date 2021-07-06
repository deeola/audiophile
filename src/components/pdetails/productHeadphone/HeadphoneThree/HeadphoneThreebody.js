import React, { useEffect, useContext } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import HeadphoneThreeFeatures from "./HeadphoneThreeFeatures";
import HeadphoneThreeImages from "./HeadphoneThreeImages";
import HeadphoneThreeLikes from "./HeadphoneThreeLikes";

function HeadphoneThreebody(props) {
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
    price = AudioContext.data[1].price;
    description = AudioContext.data[1].description;
    data = AudioContext.data[1];
  }

  useEffect(() => {
    AudioContext.getdata();

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section className="HeadphoneSection productSection">
        <div className="HeadImageOne">
          <img
            className="desktop"
            src={
              require("../../../../assets/product-xx59-headphones/desktop/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../../assets/product-xx59-headphones/tablet/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../../assets/product-xx59-headphones/mobile/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">XX 59 HEADPHONES</h2>
          <p className="sectionPara">
            {description !== undefined ? description : null}
          </p>
          <p
            className="price"
            style={{ margin: "10px 0px", fontWeight: "700" }}
          >
            €{price !== undefined ? price : null}
          </p>
          <div className="buttonAddandRemove">
            <div className="addandremove">
              <p onClick={quantity > 1 ? decreaseQuantity : undefined}>-</p>
              <p>{quantity}</p>
              <p onClick={increaseQuantity}>+</p>
            </div>
            <button className="onAddbutton" onClick={() => onAdd(data)}>
              ADD TO CART
            </button>
          </div>
          {/* SHOW NOTIFICATION ON ITEM ADD and Remove after 3 seconds */}
          {cartNotification === 1 ? (
            <div className="cartNotification">Item already added to cart</div>
          ) : (
            ""
          )}
          {cartNotification === 2 ? (
            <div className="cartNotification">Item Added to cart</div>
          ) : (
            ""
          )}
          {cartNotification === 0 ? (
            <div className="cartNotifications"></div>
          ) : (
            ""
          )}
        </div>
      </section>
      <HeadphoneThreeFeatures />
      <HeadphoneThreeImages />
      <HeadphoneThreeLikes />
    </div>
  );
}

export default HeadphoneThreebody;
