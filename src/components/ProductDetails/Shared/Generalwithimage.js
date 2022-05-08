import React from 'react'
import { Image } from '../../Category/shared/SharedStyling'
import GeneralDetails from './GeneralDetails'
import { GeneralImageContainer } from './Sharedstyling'

const Generalwithimage = ({img, alt, np, title, subtitle, price, func, num, increase, decrease }) => {
  return (
    <GeneralImageContainer>
        <Image  src={img} alt={alt} />
        <GeneralDetails increase={increase} decrease={decrease} num={num} func={func} price={price} subtitle={subtitle} np={np}  title={title}/>
    </GeneralImageContainer>
  )
}

export default Generalwithimage;
