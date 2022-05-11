import React from "react";
import Cart from "../components/Basket/Cart";
import Gear from "../components/Homey/Gear/Gear";
import SecondSpeaker from "../components/Homey/Z7speakers/ZSspeaker";
import Zspeaker from "../components/Homey/Zspeaker/Zspeaker";
import Footer from "../components/shared/Footer/Footer";
import MainHero from "../components/shared/Hero/MainHero";
import Shop from "../components/shared/Shop/Shop";
import { HomeControl } from "./homestyling";

const Homepage = () => {
  return (
    <div>
      <MainHero />
      <HomeControl>
        <Shop />
        <Zspeaker />
        <SecondSpeaker />
        <Gear />
      </HomeControl>
      <Footer />
    </div>
  );
};

export default Homepage;

