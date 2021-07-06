import React, { useContext } from "react";
import { Link } from "react-router-dom";
import audioContext from "../../context/Audiophile/audioContext";

function Basket(props) {
  const AudioContext = useContext(audioContext);
  const {
    cartItems,
    onAdd,
    onRemove,
    openBucket,
    CheckoutIconClicked,
    closeIconClicked,
    removeAll,
  } = AudioContext;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div className="Bucket" style={openBucket()}>
      <div
        id="closeModal"
        onClick={closeIconClicked}
        style={{ textAlign: "right", color: "red", cursor: "pointer" }}
      >
        X
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px 30px 0px",
        }}
      >
        <h2>CART {` (${cartItems.length})`}</h2>
        <p
          onClick={removeAll}
          style={{ borderBottom: "1px solid black", cursor: "pointer" }}
        >
          Remove all
        </p>
      </div>

      <div>{cartItems.length === 0 && <div>CART IS EMPTY</div>}</div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              borderBottom: "1px solid black",
              marginBottom: "20px",
              paddingBottom: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "20px", marginRight: "10px" }}>
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

            <div style={{ width: "20%" }}>
              <div className="bucketAddition">
                <p onClick={() => onRemove(item)}>-</p>
                <div>{item.qty}</div>
                <p onClick={() => onAdd(item)}>+</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <div>TOTAL</div>
        <div style={{ fontWeight: "700" }}>€{itemsPrice}</div>
      </div>

      {cartItems.length !== 0 && (
        <div style={{ marginTop: "20px" }}>
          <Link
            to="/checkout"
            onClick={CheckoutIconClicked}
            className="basketButton"
          >
            CHECKOUT
          </Link>
        </div>
      )}
    </div>
  );
}

export default Basket;
