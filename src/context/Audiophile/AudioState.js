import React, { useReducer, useState } from "react";
import audioContext from "./audioContext";
import audioReducer from "./audioReducer";
import { get_Data, set_loading } from "../types";

const AudioState = (props) => {
  //INITIAL STATE
  const initialState = {
    data: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(audioReducer, initialState);

  //Fetch data from JSON USING FETCH
  const getdata = async () => {
    // setloading();
    const res = await fetch("./data.json");
    const items = await res.json();

    dispatch({
      type: get_Data,
      payload: items,
    });
  };

  //SET LOADING
  const setloading = () => dispatch({ type: set_loading });

  //SET ITEM QUANTITY

  const [quantity, setquantity] = useState(1);

  const increaseQuantity = () => setquantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  //ONADD

  const [cartItems, setCartItems] = useState([]);

  const [cartNotification, setCartNotification] = useState(0);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: quantity + 1 } : x
        )
      );
      increaseQuantity();
      setCartNotification(1);
      setTimeout(() => {
        setCartNotification(0);
      }, 3000);
    } else {
      setCartItems([...cartItems, { ...product, qty: quantity }]);
      setCartNotification(2);
      setTimeout(() => {
        setCartNotification(0);
      }, 3000);
    }
  };

  //OnRemove Function
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      increaseQuantity();
      decreaseQuantity();
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: quantity - 1 } : x
        )
      );
      decreaseQuantity();
    }
  };

  //BUCKET LIST
  const [myBucketDisplay, setMyBucketDisplay] = useState(false);

  const openBucket = () => {
    return myBucketDisplay ? {} : { display: "none" };
  };

  //Open
  const bucketIconClicked = () => {
    setMyBucketDisplay(!myBucketDisplay);
    setMenuOpend(false);
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

  //Submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submitform() {
    setIsSubmitted(true);
  }

  const removeAll = () => {
    setCartItems([]);
  };

  const removeAllandReturn = () => {
    setCartItems([]);
    window.location.href = "/";
  };

  //SET SUCCESS MODAL

  const [successDisplay, setSuccessDisplay] = useState({
    display: "none",
  });

  //Open
  const continueAndPay = () => {
    setSuccessDisplay({
      display: "block",
    });
  };

  const openBuckets = () => {
    // return setSuccessDisplay ? {} : { display: "none" };
  };

  //Local storage Cart Items

  localStorage.setItem("newItems", JSON.stringify(cartItems));

  //MENU BAR

  const [menuOpened, setMenuOpend] = useState(false);

  const slideMenu = () => {
    return menuOpened ? {} : { display: "none" };
  };

  const menuIconClicked = () => {
    setMenuOpend(!menuOpened);
    setMyBucketDisplay(false);
  };

  const closeMenuOnClick = () => {
    setMenuOpend(false);
  };

  //SHOW MONEYPIN

  const [showMoneyPin, setShowMoneyPin] = useState(false);

  const clickTrue = () => {
    //SET TO TRUE
    return showMoneyPin ? {} : { display: "none" };
  };

  const showIconclicked = () => {
    setShowMoneyPin(true);
    setShowEmoney(false);
  };

  //SHOW MONEYPIN

  const [showEmoney, setShowEmoney] = useState(false);

  const clickTrues = () => {
    //SET TO TRUE
    return showEmoney ? {} : { display: "none" };
  };

  const showIconclickeds = () => {
    setShowEmoney(true);
    setShowMoneyPin(false);
  };

  // GrandTotalPrices
  let itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  let taxprice = itemsPrice * 0.2;
  let shippingPrice = 50;
  const TotalPrice = itemsPrice + taxprice + shippingPrice;

  //RETURN
  return (
    <audioContext.Provider
      value={{
        clickTrues,
        showIconclickeds,
        clickTrue,
        showIconclicked,
        closeMenuOnClick,
        slideMenu,
        menuIconClicked,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        data: state.data,
        loading: state.loading,
        getdata,
        onAdd,
        onRemove,
        cartItems,
        myBucketDisplay,
        openBucket,
        bucketIconClicked,
        myCheckoutDisplay,
        openCHECKOUT,
        CheckoutIconClicked,
        closeIconClicked,
        isSubmitted,
        Submitform,
        removeAll,
        continueAndPay,
        successDisplay,
        openBuckets,
        setIsSubmitted,
        removeAllandReturn,
        cartNotification,
        taxprice,
        itemsPrice,
        TotalPrice,
        shippingPrice,
      }}
    >
      {props.children}
    </audioContext.Provider>
  );
};

export default AudioState;
