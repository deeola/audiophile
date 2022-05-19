import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import Earphone from '../../pages/Earphone'


export default {
  title: "PAGES/Earphones/Earphone",
  component: Earphone,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <Earphone {...args} />
    </BrowserRouter>
  </AudioState>
);


export const Earphones = Template.bind({});