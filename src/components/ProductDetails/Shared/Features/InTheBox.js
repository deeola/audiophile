import React from 'react'
import BoxQuantity from './BoxQuantity';
import { DetailsContainer, InTheBoxContainer,Title } from './featurestyling'

const InTheBox = ({qty1, desc1, qty2, desc2, qty3, desc3, qty4, desc4, qty5, desc5 }) => {
  return (
    <InTheBoxContainer>
        <Title>IN THE BOX</Title>
        <DetailsContainer>
            <BoxQuantity qty={qty1}  desc={desc1}/>
            <BoxQuantity qty={qty2}  desc={desc2} />
            <BoxQuantity qty={qty3}  desc={desc3} />
            <BoxQuantity qty={qty4}  desc={desc4} />
            <BoxQuantity qty={qty5}  desc={desc5} />
        </DetailsContainer>
    </InTheBoxContainer>
  )
}

export default InTheBox;

