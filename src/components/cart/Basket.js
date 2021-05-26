import React from 'react'


function Basket(props) {

    const {cartItems, onAdd, onRemove} = props;

    const itemsPrice = cartItems.reduce((a,c) => a+c.price*c.qty, 0);
    const taxprice = itemsPrice * 0.20;
    const shippingPrice = 50;

    const TotalPrice = itemsPrice + taxprice + shippingPrice;
    return (
        <div>
            <h2>CART ITEMS</h2>
            <div>{cartItems.length===0 && <div>CART IS EMPTY</div>}</div>
            {cartItems.map(item => (
               <div key={item.id}>
                   <div>{item.name}</div>
                   <div>
                       <button onClick={() => onAdd(item)}>+</button>
                       <button onClick={() => onRemove(item)}>-</button>
                   </div>
                   <div>
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
                           <div>Total</div>
                           <div>€{TotalPrice}</div>
                           
                           </>
                       )}
                   </div>
               </div>
            ))}
            
        </div>
    )
}


export default Basket;

