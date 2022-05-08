import React from 'react'
import { Controls, Itemcontrolcont, Number } from './Sharedstyling';

const Itemcontrol = ({num, decrease, increase}) => {
  return (
    <Itemcontrolcont>
        <Controls onClick={decrease}>-</Controls>
        <Number>{num}</Number>
        <Controls onClick={increase}>+</Controls>
    </Itemcontrolcont>
  )
}

export default Itemcontrol;