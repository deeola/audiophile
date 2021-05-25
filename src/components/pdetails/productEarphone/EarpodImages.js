import React from "react";
import leftImage from '../../../assets/product-yx1-earphones/desktop/image-gallery-3.jpg'
import righttop from '../../../assets/product-yx1-earphones/desktop/image-gallery-1.jpg'
import rightbottom from '../../../assets/product-yx1-earphones/desktop/image-gallery-2.jpg'

function EarpodImages(props) {
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
          <div>
          <img src={righttop} alt='righttop'></img>
          </div>
          <div>
          <img src={rightbottom} alt='rightbottom'></img>
          </div>
      </div>
      <div style={{width:'50%'}}>
          <img src={leftImage} alt='leftiage'></img>
      </div>
    </div>
  );
}

export default EarpodImages;
