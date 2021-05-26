import React from "react";
import Navbar from "../../../layouts/Header/Navbar";
import {Link} from 'react-router-dom'
import SpeakerTwobody from "./SpeakerTwobody";
import Shop from "../../../layouts/Bodylayout/Shop";
import Gear from "../../../layouts/Bodylayout/Gear";
import Footer from "../../../layouts/footer/Footer";

function Speakerzx7(props) {

  const {countCartItems, onAdd} = props;
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
        <Navbar countCartItems={countCartItems} />
      </div>
      <Link className='Gobacklink' to='/speakers'>Go Back</Link>
      <SpeakerTwobody onAdd={onAdd} />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default Speakerzx7;
