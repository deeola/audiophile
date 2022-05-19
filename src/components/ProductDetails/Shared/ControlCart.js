import React from 'react'
import Itemcontrol from './Itemcontrol';
import { ControlCartCont } from './Sharedstyling';
import AddButton from './AddButton';

const ControlCart = ({func, num, decrease, increase, datatestid}) => {
  return (
    <ControlCartCont>
        <Itemcontrol increase={increase} decrease={decrease} num={num} />
        <AddButton  datatestid={datatestid}  label={'ADD TO CART'} func={func} />
    </ControlCartCont>
  )
}

export default ControlCart;


