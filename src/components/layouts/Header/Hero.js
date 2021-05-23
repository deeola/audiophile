import React from "react";
import Navbar from "./Navbar";

function Hero(props) {
  return (
    <div className="mainHero">
      <Navbar />
      <div className="herowrapper">
        <div className="heroText">
          <p className="productPara">New Product</p>
          <h1 className="heroMainText">XX99 Mark II Headphones</h1>
          <p className="productDescr">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button>See product</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
