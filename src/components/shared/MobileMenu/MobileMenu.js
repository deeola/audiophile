import React from 'react'
import { MenuContainer } from './MobileMenuStyling';
import SingleMenu from './SingleMenu';
import imageheadphone from '../../../assets/shared/desktop/imageheadphones.png';
import imagespeaker from '../../../assets/shared/desktop/imagespeakers.png';
import imageearphone from '../../../assets/shared/desktop/imageearphones.png';

const MobileMenu = ({primary}) => {
  return (
    <MenuContainer data-testid='menu' primary={primary}>
        <SingleMenu  label="HEADPHONES" img={imageheadphone} alt={"headphone"} link={"/heaphones"} />
        <SingleMenu   label="SPEAKERS" img={imagespeaker}  alt={"speaker"} link={"/speakers"} />
        <SingleMenu   label="EARPHONES" img={imageearphone}  alt={"earphone"} link={"/earphones"} />
    </MenuContainer>
  )
}

export default MobileMenu;

