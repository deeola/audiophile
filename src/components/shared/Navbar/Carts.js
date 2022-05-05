import React,{useContext} from 'react'
import { Cart, CartImage, CartLength } from './Navbarstyling';
import audioContext from '../../../context/Audiophile/audioContext';


const Carts = ({func, cartimg, cartlength, ci}) => {



  return (
    <Cart data-testid='cart' onClick={func}>
        <CartImage src={cartimg} alt="cart" data-testid='cartimg' />
        {ci.length !== 0 ? (
          <CartLength data-testid='cartlength'>{cartlength}</CartLength>
        ) : (
          ""
        )}
      </Cart>
  )
}

export default Carts;





