import React from 'react';
import righttop from '../../../../assets/product-zx9-speaker/desktop/image-gallery-1.jpg'
import rightbottom from '../../../../assets/product-zx9-speaker/desktop/image-gallery-2.jpg'
import leftImage from '../../../../assets/product-zx9-speaker/desktop/image-gallery-3.jpg'


function SpeakerOneImages(props) {
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
    )
}


export default SpeakerOneImages

