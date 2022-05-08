import React from 'react'
import { Button } from '../../../Buttons/Button'
import { Image , LikeComponentCont, Title} from './ProductLikestyling'

const LikeComponent = ({title, link, label, image}) => {
  return (
    <LikeComponentCont>
        <Image src={image} alt='productimage' />
        <Title>{title}</Title>
        <Button link={link}  label={label}/>
    </LikeComponentCont>
  )
}

export default LikeComponent;


