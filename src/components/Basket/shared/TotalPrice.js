import React,{useContext} from 'react'
import audioContext from '../../../context/Audiophile/audioContext';
import { TotalContainer, TotalPriceCon, TotalText } from './cartsharedstyling'

const TotalPrice = () => {
    const AudioContext = useContext(audioContext);
  const {
    cartItems,
  } = AudioContext;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  return (
    <TotalContainer>
        <TotalText>Total</TotalText>
        <TotalPriceCon>{itemsPrice}</TotalPriceCon>
    </TotalContainer>
  )
}

export default TotalPrice

