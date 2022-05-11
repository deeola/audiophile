import React from 'react'
import { CartContainer } from './CartStyling';
import CartImageControl from './shared/CartImageControl';
import CartTop from './shared/CartTop';
import Checkoutbutton from './shared/Checkoutbutton';
import TotalPrice from './shared/TotalPrice';

const Cart = () => {
  return (
    <CartContainer>
        <CartTop />
        <CartImageControl />
        <TotalPrice />
        <Checkoutbutton />
    </CartContainer>
  )
}

export default Cart;