import React from "react";
import FooterNav from "./FooterNav";
import facebook from "../../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../../assets/shared/desktop/icon-instagram.svg";

function Footer(props) {
  return (
    <div className="footer">
      <FooterNav />
      <div className="footerSecondDiv">
        <p className="footerSecondText">
          {" "}
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
      </div>
      <div className='copyIcon'>
      <p className='copyRight'>Copyright 2021. All Rights Reserved by  <span>Adeola Bamigboye</span> </p>
        <div className="icons">
          <div className="iconDiv">
            <img src={facebook}></img>
          </div>
          <div className="iconDiv">
            <img src={twitter}></img>
          </div>
          <div className="iconDiv">
            <img src={instagram}></img>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
