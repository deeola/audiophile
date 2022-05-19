import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import MarkThree from '../../pages/MarkThree'

export default {
  title: "PAGES/HEADPHONES/MARKTHREE",
  component: MarkThree,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <MarkThree {...args} />
    </BrowserRouter>
  </AudioState>
);

export const MARKTHREE = Template.bind({});