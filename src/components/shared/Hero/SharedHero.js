import React from 'react';
import { HomeControl } from '../../../pages/homestyling';
import Navbar from '../../shared/Navbar/Navbar'
import { SharedHeroContainer } from './Herostyling';
import ProductHero from './ProductHero';


const SharedHero = ({title}) => {
  return (
    <SharedHeroContainer>
        <HomeControl>
        <Navbar />
        </HomeControl>
        
        <ProductHero title={title} />

    </SharedHeroContainer>
  )
}

export default SharedHero

