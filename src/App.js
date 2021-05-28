import "./css/style.css";
import Home from "./components/home/Home";
import Headphones from "./components/categories/Headphones";
import Speakers from "./components/categories/Speakers";
import Earphones from "./components/categories/Earphones";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import EarpodProduct from "./components/pdetails/productEarphone/Earpodyx";
import AudioState from "./context/Audiophile/AudioState";
import SpeakerOne from "./components/pdetails/productSpeaker/SpeakerOne.js/Speakerzx9";
import SpeakerTwo from "./components/pdetails/productSpeaker/SpeakerTwo/Speakerzx7";
import HeadphoneOne from "./components/pdetails/productHeadphone/HeadphoneOne/HeadphoneOne";
import HeadphoneTwo from "./components/pdetails/productHeadphone/HeadphoneTwo/HeadphoneTwo";
import HeadphoneThree from "./components/pdetails/productHeadphone/HeadphoneThree/HeadphoneThree";
import Basket from "./components/cart/Basket";
import Layer from "./components/home/Layer";
import Checkout from "./components/checkout/Checkout";

function App(props) {
  const [cartItems, setCartItems] = useState([]);

  //SET Basket display

  const [myBucketDisplay, setMyBucketDisplay] = useState(false);

  const openBucket = () => {
    return myBucketDisplay ? {} : { display: "none" };
  };

  //Open
  const bucketIconClicked = () => {
    setMyBucketDisplay(!myBucketDisplay);
  };

  //CHECKOUT DISPLAY
  const [myCheckoutDisplay, setMyCheckoutDisplay] = useState(false);

  const openCHECKOUT = () => {
    return myCheckoutDisplay ? {} : { display: "none" };
  };

  //Open
  const CheckoutIconClicked = () => {
    setMyCheckoutDisplay(!myCheckoutDisplay);
    closeIconClicked();
  };

  //Close
  const closeIconClicked = () => {
    setMyBucketDisplay(false);
  };

  //On ADD
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //OnRemove Function
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //Submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submitform() {
    setIsSubmitted(true);
  }

  //REMOVE ALL

  const removeAll = () => {
    setCartItems([]);
  };

  //Local storage Cart Items

  localStorage.setItem("newItems", JSON.stringify(cartItems));

  return (
    <AudioState>
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  bucketIconClicked={bucketIconClicked}
                  closeIconClicked={closeIconClicked}
                  countCartItems={cartItems.length}
                />
              )}
            />

            <Route
              path="/headphones"
              render={(props) => (
                <Headphones
                  bucketIconClicked={bucketIconClicked}
                  countCartItems={cartItems.length}
                />
              )}
            />
            <Route
              path="/speakers"
              render={(props) => (
                <Speakers
                  bucketIconClicked={bucketIconClicked}
                  countCartItems={cartItems.length}
                />
              )}
            />
            <Route
              path="/earphones"
              render={(props) => (
                <Earphones
                  bucketIconClicked={bucketIconClicked}
                  countCartItems={cartItems.length}
                />
              )}
            />
            <Route
              path="/yx1"
              render={(props) => (
                <EarpodProduct
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/zx9"
              render={(props) => (
                <SpeakerOne
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/zx7"
              render={(props) => (
                <SpeakerTwo
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/xx99-mark-one"
              render={(props) => (
                <HeadphoneOne
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/xx99-mark-two"
              render={(props) => (
                <HeadphoneTwo
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/xx59"
              render={(props) => (
                <HeadphoneThree
                  bucketIconClicked={bucketIconClicked}
                  onRemove={onRemove}
                  countCartItems={cartItems.length}
                  onAdd={onAdd}
                />
              )}
            />
            <Route
              path="/cart"
              render={(props) => (
                <Basket
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              )}
            />

            <Route
              path="/checkout"
              render={(props) => (
                <Checkout
                  openBucket={openBucket}
                  myBucketDisplay={myBucketDisplay}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  CheckoutIconClicked={CheckoutIconClicked}
                  cartItems={cartItems}
                  openCHECKOUT={openCHECKOUT}
                  myCheckoutDisplay={myCheckoutDisplay}
                  Submitform={Submitform}
                />
              )}
            />
          </Switch>
          <Basket
            closeIconClicked={closeIconClicked}
            openBucket={openBucket}
            myBucketDisplay={myBucketDisplay}
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            CheckoutIconClicked={CheckoutIconClicked}
            removeAll={removeAll}
          />
          <Layer openBucket={openBucket} />
        </div>
      </Router>
    </AudioState>
  );
}

export default App;
