import React from "react";


function EarpodImages(props) {
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
          <div>
          <img src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-1.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-1.jpg').default} alt='righttop'></img>
          </div>
          <div>
          <img src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg').default} alt='rightbottom'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-2.jpg').default} alt='lefttop'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-2.jpg').default} alt='lefttop'></img>
          </div>
      </div>
      <div style={{width:'50%'}}>
      <img src={require('../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg').default} alt='rightbottom'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/tablet/image-gallery-3.jpg').default} alt='leftbottom'></img>
          <img style={{display:'none'}} src={require('../../../assets/product-yx1-earphones/mobile/image-gallery-3.jpg').default} alt='leftbottom'></img>
      </div>
    </div>
  );
}

export default EarpodImages;
