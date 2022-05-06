import React from 'react'
import { NewProduct, ProductContainer, SubTitle, Title } from './SharedStyling'

const ProductDetails = ({title, subtitle, np }) => {
  return (
    <ProductContainer>
        <NewProduct data-testid='np' > {np}</NewProduct>
        <Title data-testid='title' >{title}</Title>
        <SubTitle data-testid='subtitle' >{subtitle}</SubTitle>
    </ProductContainer>
  )
}

export default ProductDetails

