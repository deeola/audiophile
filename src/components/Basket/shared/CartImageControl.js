import React from 'react'
import CarItemImage from './CarItemImage'
import CartControl from './CartControl'
import { CartImageControlContainer } from './cartsharedstyling'

const CartImageControl = () => {
  return (
    <CartImageControlContainer>
        <CarItemImage />
        <CartControl />
    </CartImageControlContainer>
  )
}

export default CartImageControl

