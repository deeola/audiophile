import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import MarkTwo from '../../pages/MarkTwo'

export default {
  title: "PAGES/HEADPHONES/MARKTWO",
  component: MarkTwo,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <MarkTwo {...args} />
    </BrowserRouter>
  </AudioState>
);

export const MARKTWO = Template.bind({});

