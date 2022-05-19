import React from 'react'
import ProductDetails from './ProductDetails';
import {Button} from '../../Buttons/Button'
import { ProductDetailsGeneral } from './SharedStyling';

const ProductButton = ({link, label, title, np, subtitle}) => {
  return (
    <ProductDetailsGeneral data-testid='productbutton' >
        <ProductDetails np={np} subtitle={subtitle} title={title} />
        <Button datatestid={`productbutton-${title}`} label={label} link={link} />
    </ProductDetailsGeneral>
  )
}

export default ProductButton
