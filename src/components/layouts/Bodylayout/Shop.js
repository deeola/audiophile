import React from "react";
import {Link} from 'react-router-dom'


function Shop(props) {
  return (
    <section className="firstSection">
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={require('../../../assets/shared/desktop/imageheadphones.png').default} alt='imageheadphones'></img>
          <img style={{display:'none'}} src={require('../../../assets/shared/tablet/image-xx99-mark-one-headphones.jpg').default} alt='imageheadphones'></img>
          <img style={{display:'none'}} src={require('../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg').default} alt='imageheadphones'></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Headphones</p>
          <p className='shopText'>
            Shop <Link to= '/headphones'><span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={require('../../../assets/shared/desktop/imagespeakers.png').default} alt='imagespeakers'></img>
          <img style={{display:'none'}} src={require('../../../assets/shared/tablet/image-zx9-speaker.jpg').default} alt='imagespeakers'></img>
          <img style={{display:'none'}} src={require('../../../assets/shared/mobile/image-zx9-speaker.jpg').default} alt='imagespeakers'></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Speakers</p>
          <p className='shopText'>
            Shop <Link to='/speakers'> <span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={require('../../../assets/shared/desktop/imageearphones.png').default} alt='imageearphones'></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Earphones</p>
          <p className='shopText'>
            Shop <Link to='/earphones'> <span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Shop;
