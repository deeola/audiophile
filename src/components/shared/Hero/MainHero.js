import React from "react";
import { Button } from "../../Buttons/Button";
import {
  HeroBackground,
  HeroControl,
  HeroPicture,
  HeroTextControl,
  HeroPictureControl,
} from "./Herostyling";
import Navbar from "../Navbar/Navbar";
import Line from "./line";
import HeroText from "./HeroText";

const MainHero = () => {
  return (
    <HeroBackground>
      <HeroControl >
        <Navbar />
        <Line />
        <HeroText />
      </HeroControl>
    </HeroBackground>
  );
};

export default MainHero;
