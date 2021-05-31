import React,{useReducer,useState} from 'react';
import audioContext from './audioContext';
import audioReducer from './audioReducer';
import {
    get_Data,
    set_loading
} from '../types';


const AudioState = props => {



    //INITIAL STATE
    const initialState = {
        data:[],
        loading:false,
        // cartItems:[],
        // myBucketDisplay:false,
        // myCheckoutDisplay:false,
        // isSubmitted:false

    }

    const [state,dispatch] = useReducer(audioReducer, initialState)



    //Fetch data from JSON USING FETCH
    const getdata = async () => {
        setloading()
        const res = await fetch("./data.json");
    
        const items = await res.json();

    

        dispatch({
            type:get_Data,
            payload : items
        });
    };

    //SET LOADING
    const setloading = () => dispatch({type:set_loading})


    //ONADD

    const [cartItems, setCartItems] = useState([])

    // On ADD
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


  //BUCKET LIST
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

  //Submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  function Submitform() {
    setIsSubmitted(true);
  }

  const removeAll=()=>{
      setCartItems([])
  }



  //SET SUCCESS MODAL
  const [successDisplay, setSuccessDisplay] = useState({

    display:'none'

});



//Open
const continueAndPay = () => {

  setSuccessDisplay({

    display:'block'

});

  
};



const openBuckets = () => {
  return setSuccessDisplay ? {} : { display: "none" };
};




 //Local storage Cart Items

  localStorage.setItem("newItems", JSON.stringify(cartItems));


    //RETURN
    return <audioContext.Provider
    value={{
        data : state.data,
        loading:state.loading,
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
        openBuckets

    }}
    >

        {props.children}
    </audioContext.Provider>

}

export default AudioState;