import React, { useContext, useEffect } from "react";
import audioContext from "../../../../context/Audiophile/audioContext";
import SpeakerTwoFeatures from "./SpeakerTwoFeatures";
import SpeakerTwoImages from "./SpeakerTwoImages";
import SpeakerTwoLikes from "./SpeakerTwoLikes";

function SpeakerTwobody(props) {
  const AudioContext = useContext(audioContext);
  const {
    onAdd,
    quantity,
    decreaseQuantity,
    increaseQuantity,
    cartNotification,
  } = AudioContext;

  //Price, description and data 
  let price;
  let description;
  let data;
  if (AudioContext.data.length > 0) {
    price = AudioContext.data[4].price;
    data = AudioContext.data[4];
    description = AudioContext.data[4].description;
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
              require("../../../../assets/product-zx7-speaker/desktop/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
          <img
            className="tablet"
            src={
              require("../../../../assets/product-zx7-speaker/tablet/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
          <img
            className="mobile"
            src={
              require("../../../../assets/product-zx7-speaker/mobile/image-product.jpg")
                .default
            }
            alt="speaker"
          ></img>
        </div>
        <div className="SectionText sectionOne">
          <p className="newProductSec">NEW PRODUCT</p>
          <h2 className="SectionMainTitle">ZX7 SPEAKER</h2>
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
      <SpeakerTwoFeatures />
      <SpeakerTwoImages />
      <SpeakerTwoLikes />
    </div>
  );
}

export default SpeakerTwobody;
