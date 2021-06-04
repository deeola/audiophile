import React from "react";


function EarpodImages(props) {
  return (
    <div className='FeaturesImagesDiv'>
      <div className='LefImageDiv'>
          <div className='firstImageDiv'>
          <img className='desktop' src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='tablet'  src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg').default} alt='righttop'></img>
          <img className='mobile'src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg').default} alt='righttop'></img>
          </div>
          <div className='secondImageDiv'>
          <img className='desktop' src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg').default} alt='rightbottom'></img>
          <img className='tablet'  src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg').default} alt='lefttop'></img>
          <img className='mobile' src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg').default} alt='lefttop'></img>
          </div>
      </div>
      <div className='rightImageDiv' >
      <img className='desktop' src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg').default} alt='rightbottom'></img>
          <img className='tablet'  src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg').default} alt='leftbottom'></img>
          <img className='mobile' src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg').default} alt='leftbottom'></img>
      </div>
    </div>
  );
}

export default EarpodImages;
