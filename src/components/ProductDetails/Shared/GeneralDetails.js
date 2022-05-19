import React from 'react'
import ControlCart from './ControlCart'
import PriceProduct from './PriceProduct'
import { GeneralDetailsCont } from './Sharedstyling'

const GeneralDetails = ({price, subtitle, title, np, func, num, increase, decrease}) => {
  return (
    <GeneralDetailsCont>
        <PriceProduct price={price} subtitle={subtitle} title={title} np={np} />
        <ControlCart datatestid={`addButton-${title}`} decrease={decrease} increase={increase} func={func} num={num} />
    </GeneralDetailsCont>
  )
}

export default GeneralDetails