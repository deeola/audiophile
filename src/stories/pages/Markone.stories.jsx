import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import MarkOne from '../../pages/MarkOne'

export default {
  title: "PAGES/HEADPHONES/MARKONE",
  component: MarkOne,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <MarkOne {...args} />
    </BrowserRouter>
  </AudioState>
);

export const MARKONE = Template.bind({});