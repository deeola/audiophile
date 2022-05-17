import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import MainHero from "../../../components/shared/Hero/MainHero";
import audioContext from "../../../context/Audiophile/audioContext";
import AudioState from "../../../context/Audiophile/AudioState";

const MockHero = () => {
  // const AudioContext = useContext(audioContext);
  // const { bucketIconClicked} = AudioContext;

  return (
    <AudioState>
      <MainHero />
    </AudioState>
  );
};

export default {
  title: "Components/HERO",
  component: MockHero,
};

const Template = (args) => (
  <BrowserRouter>
    <MockHero />
  </BrowserRouter>
);

export const Hero = Template.bind({});
Hero.args = {
  primary: true,
};
