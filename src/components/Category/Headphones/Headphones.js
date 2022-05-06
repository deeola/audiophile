import React from 'react'
import ProductWithImage from '../shared/ProductWithImage'
import { HeadphoneCont } from './Headphonestyling';

//image imports

import xx99 from '../../../assets/category-headphones/mobile/image-xx99-mark-two.jpg';


const Headphones = () => {
  return (
    <HeadphoneCont data-testid='headphone'>
        <ProductWithImage link='/xx99-mark-two' img={xx99} label='SEE PRODUCT' np={'NEW PRODUCT'} title='XX99 Mark II Headphones' subtitle={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'} />
        <ProductWithImage primary link='/xx99-mark-one' img={xx99} label='SEE PRODUCT' title='XX99 Mark I Headphones' subtitle={'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'} />
        <ProductWithImage  link='/xx59' img={xx99} label='SEE PRODUCT' title='XX59 Headphones' subtitle={' Enjoy your audio almost anywhere and customize it to your specifictastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'} />
    </HeadphoneCont>
  )
}

export default Headphones

