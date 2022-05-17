import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import Homepage from "../../pages/Homepage";

export default {
  title: "PAGES/HOME",
  component: Homepage,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <Homepage {...args} />
    </BrowserRouter>
  </AudioState>
);

export const Home = Template.bind({});
