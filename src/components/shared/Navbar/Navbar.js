import React, { useContext } from "react";
import {
  Nav,
  LogoContainer,
  HamContainer,
  NavList,
  List,
  Ham,
  Logo,
  CartImage,
  Cart,
  CartLength,
} from "./Navbarstyling";
import audioContext from "../../../context/Audiophile/audioContext";
import hamburger from "../../../assets/shared/tablet/hamburger.svg";
import logo from "../../../assets/shared/desktop/logo.svg";
import cartimg from "../../../assets/shared/desktop/cart.svg";
import Links from "./Links";
import LogoComponent from "./LogoComponent";

const Navbar = () => {
  const AudioContext = useContext(audioContext);
  const { bucketIconClicked, menuIconClicked, cartItems } = AudioContext;
  console.log(CartLength, cartItems);
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
        <LogoComponent img={logo} alt={"logo"} />
      </List>
      <NavList>
        <Links label={"Home"} to="/"  />
        <Links  label={"Headphones"} to="/Headphones" />
        <Links to="/Speakers" label={"Speakers"} />
        <Links to="/Earphones" label={"Earphones"} />
      </NavList>
      <Cart onClick={bucketIconClicked}>
        <CartImage src={cartimg} alt="cart" />
        {cartItems.length !== 0 ? (
          <CartLength>{cartItems.length}</CartLength>
        ) : (
          ""
        )}
      </Cart>
    </Nav>
  );
};

export default Navbar;
