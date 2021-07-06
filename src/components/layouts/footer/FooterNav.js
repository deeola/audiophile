import React from "react";
import footerlogo from "../../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";


function FooterNav(props) {
  return (
    <div className="footerNav">
      <div className="logo-ham">
        <img
          className="hamburger hamtab"
          src={"/assets/shared/tablet/icon-hamburger.svg"}
          alt="hamburger"
        ></img>
        <img alt="logo" className="logo" src={footerlogo}></img>
      </div>
      <ul>
        <Link className="mylink" to="/">
          Home
        </Link>
        <Link className="mylink" to="/Headphones">
          Headphones
        </Link>
        <Link className="mylink" to="/Speakers">
          Speakers
        </Link>
        <Link className="mylink" to="/Earphones">
          Earphones
        </Link>
      </ul>
    </div>
  );
}

export default FooterNav;
