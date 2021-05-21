import React from "react";

function Shop(props) {
  return (
    <section className="firstSection">
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={"/assets/shared/desktop/image-headphones.png"}></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Headphones</p>
          <p className='shopText'>
            Shop <span>&#62;</span>
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={"/assets/shared/desktop/image-speakers.png"}></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Speakers</p>
          <p className='shopText'>
            Shop <span>&#62;</span>
          </p>
        </div>
      </div>
      <div className="shopSection">
        <div className="shopImageDiv">
          <img src={"/assets/shared/desktop/image-earphones.png"}></img>
        </div>

        <div className='shopTextDiv'>
          <p className='shoptitle'>Earphones</p>
          <p className='shopText'>
            Shop <span>&#62;</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Shop;
