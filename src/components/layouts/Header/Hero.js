import React from "react";
import Navbar from "./Navbar";
import Rectangle from "./Rectangle";

function Hero(props) {

  return (
    <div className="mainHero">
      <div>
      <Navbar />
      <Rectangle />
      </div>
      
      <div className='heroContainer' >
        <div className="heroText">
          <p className="productPara">New Product</p>
          <h1 className="heroMainText">XX99 Mark II</h1>
          <h1> Headphones</h1>
          <p className="productDescr secondh">
            Experience natural, lifelike audio and exceptional  
          </p>
          <p className="productDescr">
             build quality
            made for the passionate music
          </p>
          <p className="productDescr ">
            enthusiast.
          </p>
          <button>See product</button>
        </div>
        <div className="herowrapper">
          {/* <img style={{width:'100%', top:'0px'}} src={require('../../../assets/home/desktop/image-hero.jpg').default}></img> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
