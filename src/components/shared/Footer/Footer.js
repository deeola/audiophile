import React from "react";
import LogoComponent from "../Navbar/LogoComponent";
import {
  List,
  NavList,
  Copyright,
  Icon,
  SocialMediaIcons,
  SubText,
  FooterContainer,
  FooterNavContainer,
  FooterDescription,
  FooterControl,
  FooterList
} from "./footerstyling";
import { library } from "@fortawesome/fontawesome-svg-core";
import logo from "../../../assets/shared/desktop/logo.svg";

import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Links from "../Navbar/Links";
library.add(faFacebook, faTwitter, faInstagram);

const Footer = () => {
  const copy = new Date().getFullYear();

  return (
    <FooterContainer role={'footer'}>
      <FooterControl>
        <FooterNavContainer>
          <FooterList to={"/"}>
            <LogoComponent img={logo} />
          </FooterList>
          <NavList>
            <List  to="/" >Home</List>
            <List to="/Headphones" >Headphones</List>
            <List to="/Speakers" >Speakers</List>
            <List to="/Earphones"  >Earphones</List>
          </NavList>
        </FooterNavContainer>
        <SubText data-testid='subheading'>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </SubText>
        <FooterDescription>
          <Copyright data-testid='year'>
            Copyright {copy}. All Rights Reserved
          </Copyright>
          <SocialMediaIcons>
            <Icon icon={faFacebook} />
            <Icon icon={faTwitter} />
            <Icon icon={faInstagram} />
          </SocialMediaIcons>
        </FooterDescription>
      </FooterControl>
    </FooterContainer>
  );
};

export default Footer;
