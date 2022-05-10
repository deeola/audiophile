import React from 'react'
import { HomeControl } from '../../../pages/homestyling';
import Navbar from './Navbar'
import { ProductNavCont } from './Navbarstyling';

const ProductNav = () => {
  return (
    <ProductNavCont>
     <HomeControl>
     <Navbar />
     </HomeControl>
    </ProductNavCont>
  )
}

export default ProductNav;
