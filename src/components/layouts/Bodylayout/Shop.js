import React from "react";
import imageheadphones from '../../../assets/shared/desktop/imageheadphones.png';
import imagespeakers from '../../../assets/shared/desktop/imagespeakers.png';
import imageearphones from '../../../assets/shared/desktop/imageearphones.png';
import {Link} from 'react-router-dom'


function Shop(props) {
  return (
    <section className="firstSection">
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={imageheadphones} alt='imageheadphones'></img>
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
          <img src={imagespeakers} alt='imagespeakers'></img>
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
          <img src={imageearphones} alt='imageearphones'></img>
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
