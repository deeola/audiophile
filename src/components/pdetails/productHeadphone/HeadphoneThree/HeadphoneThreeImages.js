import React from 'react';



function HeadphoneThreeImages(props) {
    return (
        <div className='FeaturesImagesDiv'>
      <div className='LefImageDiv' >
          <div className='firstImageDiv'>
          <img  className='desktop'  src={require('../../../../assets/product-xx59-headphones/desktop/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='tablet' src={require('../../../../assets/product-xx59-headphones/tablet/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='mobile'  src={require('../../../../assets/product-xx59-headphones/mobile/image-gallery-1.jpg').default} alt='righttop'></img>
          </div>
          <div className='secondImageDiv'>
          <img className='desktop'  src={require('../../../../assets/product-xx59-headphones/desktop/image-gallery-2.jpg').default} alt='righttop'></img>
          <img className='tablet' src={require('../../../../assets/product-xx59-headphones/tablet/image-gallery-2.jpg').default} alt='righttop'></img>
          <img className='mobile'  src={require('../../../../assets/product-xx59-headphones/mobile/image-gallery-2.jpg').default} alt='righttop'></img>
          </div>
      </div>
      <div className='rightImageDiv' >
      <img className='desktop'  src={require('../../../../assets/product-xx59-headphones/desktop/image-gallery-3.jpg').default} alt='righttop'></img>
          <img className='tablet'  src={require('../../../../assets/product-xx59-headphones/tablet/image-gallery-3.jpg').default} alt='righttop'></img>
          <img className='mobile'   src={require('../../../../assets/product-xx59-headphones/mobile/image-gallery-3.jpg').default} alt='righttop'></img>
      </div>
    </div>
    )
}


export default HeadphoneThreeImages

