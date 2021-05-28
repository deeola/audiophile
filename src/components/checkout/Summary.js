import React from "react";
import images from "../../assets/cart/image-xx59-headphones.jpg";
import { Link } from "react-router-dom";

import sampleimage from "../../assets/shared/desktop/icon-facebook.svg";

function Summary(props) {
  const {
    cartItems,
    onAdd,
    onRemove,
    myBucketDisplay,
    openBucket,
    closeIconClicked,
    CheckoutIconClicked,
  } = props;

  console.log(cartItems);

  //  FETCH LOCAL STORAGE

  const summaryItems = JSON.parse(localStorage.getItem("newItems"));

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxprice = itemsPrice * 0.2;
  const shippingPrice = 50;

  const TotalPrice = itemsPrice + taxprice + shippingPrice;

  //Styles

  //   const {,closeIconClicked } = props

  return (
    <div >
      <div>{summaryItems.length === 0 && <div>CART IS EMPTY</div>}</div>
      {summaryItems.map((item) => (
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
              {/* image, name and price here */}

              <div style={{ width: "20px", marginRight: "10px" }}>
                {/* image */}
                <img src={sampleimage} alt="smallimage"></img>
              </div>
              <div>
                {/* name and price here */}
                <p>{item.name}</p>
                {summaryItems.length !== 0 && (
                  <>
                    <hr></hr>
                    <div>€{item.price.toFixed(2)}</div>
                  </>
                )}
              </div>
            </div>

            <div style={{ width: "20%" }}>
              {/* Button  and number here */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "white",
                }}
              >
                <div>{item.qty}</div>
              </div>
            </div>
          </div>
          {/* <div>
            {item.qty} x {item.price.toFixed(2)}
            {cartItems.length !== 0 && (
              <>
                <hr></hr>
                <div>Items Price</div>
                <div>€{item.price.toFixed(2)}</div>
                <div>Tax</div>
                <div>€{taxprice}</div>
                <div>Shipping</div>
                <div>€{shippingPrice}</div>
              </>
            )}
          </div> */}
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
        <div>Total</div>
        <div style={{ fontWeight: "700" }}>€{itemsPrice}</div>
      </div>


      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <div>SHIPPING</div>
        <div style={{ fontWeight: "700" }}>€{shippingPrice}</div>
      </div>



      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <div>VAT(Tax Included)</div>
        <div style={{ fontWeight: "700" }}>€{taxprice}</div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <div>GRAND TOTAL</div>
        <div style={{ fontWeight: "700" }}>€{TotalPrice}</div>
      </div>



      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            display: "inline-block",
            width: "100%",
            height: "40px",
            cursor: "pointer",
          }}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Summary;
