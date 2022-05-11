import React from 'react'
import { CartCountContainer } from './cartsharedstyling'

const Cartcount = ({cartcount}) => {
  return (
    <CartCountContainer>
        <p>CART</p>
        <p>({cartcount})</p>
    </CartCountContainer>
  )
}

export default Cartcount

