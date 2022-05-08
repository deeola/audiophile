import React from 'react'
import ProductDetails from '../../Category/shared/ProductDetails'
import Price from './Price'
import { PriceProductCont } from './Sharedstyling'

const PriceProduct = ({price, title, subtitle, np}) => {
  return (
    <PriceProductCont>
        <ProductDetails np={np}  subtitle={subtitle} title={title} />
      <Price price={price} />
    </PriceProductCont>
  )
}

export default PriceProduct



