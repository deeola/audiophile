import React from "react";
import { Link } from "react-router-dom";
import Gear from "../../../layouts/Bodylayout/Gear";
import Shop from "../../../layouts/Bodylayout/Shop";
import Footer from "../../../layouts/footer/Footer";
import Navbar from "../../../layouts/Header/Navbar";
import SpeakerOnebody from "./SpeakerOnebody";


function Speakerzx9(props) {

  const {countCartItems, onAdd,bucketIconClicked} = props;
  return (
    <div>
      <div
        className="productnav"
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "97px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar bucketIconClicked={bucketIconClicked} countCartItems={countCartItems}/>
      </div>
      <Link className='Gobacklink' to='/speakers'>Go Back</Link>
      <SpeakerOnebody onAdd={onAdd} />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Speakerzx9;
