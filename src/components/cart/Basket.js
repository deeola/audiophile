import React,{useContext} from "react";
import {Link} from 'react-router-dom';
import audioContext from '../../context/Audiophile/audioContext'


function Basket(props) {

  const AudioContext = useContext(audioContext);

  const cartItems = AudioContext.cartItems;
  const onAdd = AudioContext.onAdd;
  const onRemove = AudioContext.onRemove;
  const openBucket = AudioContext.openBucket;
  const CheckoutIconClicked = AudioContext.CheckoutIconClicked;
  const closeIconClicked = AudioContext.closeIconClicked;
  const removeAll = AudioContext.removeAll;


  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);



  return (
    <div className="Bucket" style={openBucket()}>
      <div id='closeModal' onClick={closeIconClicked} style={{ textAlign: "right", color: "red", cursor: "pointer" }}>
        X
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "10px 0px",
        }}
      >
        <h2>cart {` (${cartItems.length})`}</h2>
        <p onClick={removeAll} style={{ borderBottom: "1px solid black", cursor:'pointer'}}>Remove all</p>
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
              marginBottom:'20px',
              paddingBottom:'10px'
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
                <img src={require('../../assets'+item.image.desktop).default} alt="smallimage"></img>
                <img style={{display:'none'}} src={require('../../assets'+item.image.tablet).default} alt="smallimage"></img>
                <img style={{display:'none'}}  src={require('../../assets'+item.image.mobile).default} alt="smallimage"></img>
              </div>
              <div>
                {/* name and price here */}
                <p>{item.name}</p>
                {cartItems.length !== 0 && (
                  <>
                    <hr></hr>
                    <div>€{item.price.toFixed(2)}</div>
                    {/* <div>Tax</div>
                <div>€{taxprice}</div>
                <div>Shipping</div>
                <div>€{shippingPrice}</div> */}
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
                <button style={{border:'1px solid gray'}} onClick={() => onRemove(item)}>-</button>
                <div>{item.qty}</div>
                <button  style={{border:'1px solid gray'}} onClick={() => onAdd(item)}>+</button>
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
        <div>Total</div>
        <div style={{ fontWeight: "700" }}>€{itemsPrice}</div>
      </div>

      {cartItems.length !== 0 && <div style= {{marginTop:'20px'}}>
          <Link to='/checkout' onClick={CheckoutIconClicked}  style={{display:'inline-block', width:'100%', height:'40px', cursor:'pointer'}}>CHECKOUT</Link>
      </div> }
      
    </div>
  );
}

export default Basket;
