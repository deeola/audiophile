import React from 'react';
import { PriceCont } from './Sharedstyling';

const Price = ({price}) => {
  return (
    <PriceCont data-testid='price'>€ {price}</PriceCont>
  )
}

export default Price

