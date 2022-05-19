import React from 'react'
import ProductButton from './ProductButton'
import { Image, ProductWithImageCont } from './SharedStyling'

const ProductWithImage = ({img, link, np, label, title, subtitle, primary}) => {
  return (
    <ProductWithImageCont data-testid='productimage' primary={primary}>
        <Image src={img} alt={title}>
        </Image>
        <ProductButton  subtitle={subtitle} title={title} label={label} link={link} np={np}  />
    </ProductWithImageCont>
  )
}

export default ProductWithImage

