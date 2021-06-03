import React from "react";
import {Link} from 'react-router-dom'


function Shop(props) {
  return (
    <section className="firstSection">
      <div className="shopSection">
        <div className="shopImageDiv imageheadphones">
          <img className='desktop' src={require('../../../assets/shared/desktop/imageheadphones.png').default} alt='imageheadphones'></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Headphones</p>
          <p className='shopText'>
            Shop <Link className='shopTextLink' to= '/headphones'><span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv imagespeakers">
          <img src={require('../../../assets/shared/desktop/imagespeakers.png').default} alt='imagespeakers'></img>
          
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Speakers</p>
          <p className='shopText'>
            Shop <Link className='shopTextLink' to='/speakers'> <span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv  imageearphones">
          <img src={require('../../../assets/shared/desktop/imageearphones.png').default} alt='imageearphones'></img>

        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Earphones</p>
          <p className='shopText'>
            Shop <Link className='shopTextLink' to='/earphones'> <span>&#62;</span> </Link> 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Shop;
