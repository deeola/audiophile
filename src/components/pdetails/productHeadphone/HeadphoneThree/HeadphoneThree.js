import React from "react";
import Navbar from "../../../layouts/Header/Navbar";
import {Link} from 'react-router-dom'
import HeadphoneThreebody from "./HeadphoneThreebody";
import Shop from "../../../layouts/Bodylayout/Shop";
import Gear from "../../../layouts/Bodylayout/Gear";
import Footer from "../../../layouts/footer/Footer";

function HeadphoneThree(props) {

  const {countCartItems, onAdd,bucketIconClicked} = props
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
        <Navbar bucketIconClicked={bucketIconClicked} countCartItems={countCartItems} />
      </div>
      <Link className="Gobacklink" to="/headphones">
        Go Back
      </Link>
      <HeadphoneThreebody onAdd={onAdd} />
      <Shop />
      <Gear />
      <Footer />
    </div>
  );
}

export default HeadphoneThree;
