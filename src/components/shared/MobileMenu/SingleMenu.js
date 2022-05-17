import React from 'react'
import { TetiaryButton } from '../../Buttons/Button';
import { MenuImage, SingleMenuContainer, Text } from './MobileMenuStyling';


const SingleMenu = ({ labels="Shop", label,  alt, span=">", img, link, mobile, datatestid}) => {
  return (
    <SingleMenuContainer data-testid='singlemenu' mobile={mobile}>
        <MenuImage  data-testid='alt' src={img} alt={alt} />
        <Text data-testid='textlabel'>{label}</Text>
        <TetiaryButton datatestid={datatestid} label={labels} link={link} span={span} />
    </SingleMenuContainer>
  )
}

export default SingleMenu;



