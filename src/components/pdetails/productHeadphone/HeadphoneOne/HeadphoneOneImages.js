import React from 'react';
import leftImage from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg'
import righttop from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg'
import rightbottom from '../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg'



function HeadphoneOneImages(props) {
    return (
        <div className='FeaturesImagesDiv'>
      <div className='LefImageDiv' >
          <div className='firstImageDiv' >
          <img className='desktop' src={require('../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='tablet'  src={require('../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='mobile' src={require('../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg').default} alt='righttop'></img>
          </div>
          <div className='secondImageDiv'>
          <img className='desktop' src={require('../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg').default} alt='righttop'></img>
          <img className='tablet'  src={require('../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-2.jpg').default} alt='righttop'></img>
          <img className='mobile' src={require('../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg').default} alt='righttop'></img>
          </div>
      </div>
      <div className='rightImageDiv' >
        <img className='desktop'  src={require('../../../../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg').default} alt='righttop'></img>
          <img className='tablet' src={require('../../../../assets/product-xx99-mark-one-headphones/tablet/image-gallery-3.jpg').default} alt='righttop'></img>
          <img  className='mobile' src={require('../../../../assets/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg').default} alt='righttop'></img>
      </div>
    </div>
    )
}

export default HeadphoneOneImages

