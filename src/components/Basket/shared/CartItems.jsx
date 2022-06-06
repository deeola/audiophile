import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import { CartItemsContainer } from "./cartsharedstyling";

const CartItems = () => {
  const AudioContext = useContext(audioContext);
  const {
    cartItems,
    onAdd,
    onRemove,
  } = AudioContext;


  return (
    <CartItemsContainer>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div>
            <div>
              <div>
                <img
                  src={require("../../assets" + item.image.desktop).default}
                  alt="smallimage"
                ></img>
                <img
                  style={{ display: "none" }}
                  src={require("../../assets" + item.image.tablet).default}
                  alt="smallimage"
                ></img>
                <img
                  style={{ display: "none" }}
                  src={require("../../assets" + item.image.mobile).default}
                  alt="smallimage"
                ></img>
              </div>
              <div>
                <p>{item.name}</p>
                {cartItems.length !== 0 && (
                  <>
                    <hr></hr>
                    <div>€{item.price.toFixed(2)}</div>
                  </>
                )}
              </div>
            </div>

            <div>
              <div className="bucketAddition">
                <p onClick={() => onRemove(item)}>-</p>
                <div>{item.qty}</div>
                <p onClick={() => onAdd(item)}>+</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </CartItemsContainer>
  );
};

export default CartItems;
