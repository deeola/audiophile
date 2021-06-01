import React from 'react';
import righttop from '../../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg'
import rightbottom from '../../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg'
import leftImage from '../../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg'

function SpeakerTwoImages(props) {
    return (
        <div style={{display:'flex'}}>
      <div style={{width:'50%'}}>
          <div>
          <img src={require('../../../../assets/product-zx7-speaker/desktop/image-gallery-1.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/tablet/image-gallery-1.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/mobile/image-gallery-1.jpg').default} alt='righttop'></img>
          </div>
          <div>
          <img src={require('../../../../assets/product-zx7-speaker/desktop/image-gallery-2.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/tablet/image-gallery-2.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/mobile/image-gallery-2.jpg').default} alt='righttop'></img>
          </div>
      </div>
      <div style={{width:'50%'}}>
      <img src={require('../../../../assets/product-zx7-speaker/desktop/image-gallery-3.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/tablet/image-gallery-3.jpg').default} alt='righttop'></img>
          <img style={{display:'none'}} src={require('../../../../assets/product-zx7-speaker/mobile/image-gallery-3.jpg').default} alt='righttop'></img>
      </div>
    </div>
    )
}

export default SpeakerTwoImages

