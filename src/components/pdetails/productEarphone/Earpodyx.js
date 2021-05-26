import React from "react";
import { Link } from "react-router-dom";
import Gear from "../../layouts/Bodylayout/Gear";
import Shop from "../../layouts/Bodylayout/Shop";
import Footer from "../../layouts/footer/Footer";
import Navbar from "../../layouts/Header/Navbar";
import EarpodBody from "./EarpodBody";


function Test(props) {


  const {onAdd,countCartItems, onRemove } = props;

  return (
    <div>
      <div
        className="productnav"
        style={{ backgroundColor: "black", width: "100%", height: "97px", display:'flex', justifyContent:'center', alignItems:'center'}}
      >
        <Navbar  countCartItems = {countCartItems}/>
      </div>
      <Link className='Gobacklink' to='/earphones'>Go Back</Link>
      <EarpodBody onAdd={onAdd} onRemove={onRemove}/>
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Test;
