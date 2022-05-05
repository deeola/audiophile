import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

// import Navbar from "./Navbar";
import Rectangle from "./Rectangle";



function Hero(props) {
  return (
    <div className="mainHero">
      <div>
        <Navbar />
        {/* <Navbar /> */}
        <Rectangle />
      </div>

      <div className="heroContainer">
        <div className="heroText">
          <p className="productPara">New Product</p>
          <h1 className="heroMainText">XX99 Mark II</h1>
          <h1> Headphones</h1>
          <p className="productDescr secondh">
            Experience natural, lifelike audio and exceptional
          </p>
          <p className="productDescr">
            build quality made for the passionate music
          </p>
          <p className="productDescr ">enthusiast.</p>
          <button>
            {" "}
            <Link to="/xx99-mark-two" className="shopTextLink">
              See product
            </Link>{" "}
          </button>
        </div>
        <div className="herowrapper"></div>
      </div>
    </div>
  );
}

export default Hero;

