import React, { useContext } from "react";
import audioContext from "../../../context/Audiophile/audioContext";
import MobileMenu from "../../shared/MobileMenu/MobileMenu";
import { MenuCont } from "../../shared/MobileMenu/MobileMenuStyling";

function Menu(props) {
  const AudioContext = useContext(audioContext);
  const slideMenu = AudioContext.slideMenu;

  return (
    <MenuCont style={slideMenu()}>
      <MobileMenu primary={"primary"} />
    </MenuCont>
  );
}

export default Menu;
