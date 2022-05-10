import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import MainHero from "../../../components/shared/Hero/MainHero";
import audioContext from "../../../context/Audiophile/audioContext";

const MockHero = ({func, ...args }) => {
  const AudioContext = useContext(audioContext);
  const { bucketIconClicked, menuIconClicked, cartItems } = AudioContext;

  return <MainHero func={bucketIconClicked} {...args} />;
};

export default {
  title: "Components/HERO",
  component: MockHero,
};

const Template = (args) => (
  <BrowserRouter>
    <MockHero  {...args} />
  </BrowserRouter>
);

export const Hero = Template.bind({});
Hero.args = {
  primary: true,
};
