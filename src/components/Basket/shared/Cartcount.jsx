import React,{FC} from 'react'
import { CartCountContainer } from './cartsharedstyling'


const Cartcount = ({cartcount, cart}) => {
  return (
    <CartCountContainer>
        <p>{cart}</p>
        <p>({cartcount})</p>
    </CartCountContainer>
  )
}

export default Cartcount

