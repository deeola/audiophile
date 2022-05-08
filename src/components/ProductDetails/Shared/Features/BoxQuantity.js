import React from 'react'
import { DescContainer, QtyContainer, BoxQuantityCont } from './featurestyling'

const BoxQuantity = ({qty, desc}) => {
  return (
    <BoxQuantityCont>
        <QtyContainer>{qty}</QtyContainer>
        <DescContainer>{desc}</DescContainer>
    </BoxQuantityCont>
  )
}

export default BoxQuantity;