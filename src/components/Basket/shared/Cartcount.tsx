import React,{FC} from 'react'
import { CartCountContainer } from './cartsharedstyling'

interface Props {
  cart: string,
  cartcount: number
}

const Cartcount:FC<Props> = ({cartcount, cart}) => {
  return (
    <CartCountContainer>
        <p>{cart}</p>
        <p>({cartcount})</p>
    </CartCountContainer>
  )
}

export default Cartcount

