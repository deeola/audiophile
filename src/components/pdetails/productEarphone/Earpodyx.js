import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../layouts/Header/Navbar";
import EarpodBody from "./EarpodBody";


function Test(props) {


    

  return (
    <div>
      <div
        className="productnav"
        style={{ backgroundColor: "black", width: "100%", height: "97px", display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <Navbar />
      </div>
      <Link className='Gobacklink' to='/earphones'>Go Back</Link>
      <EarpodBody />
    </div>
  );
}

export default Test;
