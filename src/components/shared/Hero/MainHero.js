import React from "react";
import { Button } from "../../Buttons/Button";
import {
  HeroBackground,
  HeroControl,
} from "./Herostyling";
import Navbar from "../Navbar/Navbar";
import Line from "./line";
import HeroText from "./HeroText";

const MainHero = ({datatestid}) => {
  return (
    <HeroBackground>
      <HeroControl >
        <Navbar />
        <Line />
        <HeroText datatestid={datatestid} />
      </HeroControl>
    </HeroBackground>
  );
};

export default MainHero;
