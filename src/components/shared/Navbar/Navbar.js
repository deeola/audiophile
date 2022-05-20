import React, { useContext } from "react";
import { Nav, HamContainer, NavList, List, Ham } from "./Navbarstyling";
import audioContext from "../../../context/Audiophile/audioContext";
import hamburger from "../../../assets/shared/tablet/hamburger.svg";
import logo from "../../../assets/shared/desktop/logo.svg";
import cartimg from "../../../assets/shared/desktop/cart.svg";
import Links from "./Links";
import LogoComponent from "./LogoComponent";
import Carts from "./Carts";

const Navbar = () => {
  const AudioContext = useContext(audioContext);

  const { bucketIconClicked, menuIconClicked, cartItems } = AudioContext;

  return (
    <Nav data-testid="navbar">
      <HamContainer>
        <Ham
          onClick={() => {
            menuIconClicked();
          }}
          src={hamburger}
          alt="hamburger"
        />
      </HamContainer>
      <List to={"/"}>
        <LogoComponent img={logo} />
      </List>
      <NavList>
        <Links label={"Home"} to="/" />
        <Links label={"Headphones"} to="/Headphones" />
        <Links to="/Speakers" label={"Speakers"} />
        <Links to="/Earphones" label={"Earphones"} />
      </NavList>
      <Carts
        ci={cartItems}
        data-testid="kart"
        func={() => bucketIconClicked()}
        cartimg={cartimg}
        cartlength={cartItems.length}
      />
    </Nav>
  );
};

export default Navbar;
