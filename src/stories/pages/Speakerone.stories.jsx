import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import Speakerone from '../../pages/Speakerone'

export default {
  title: "PAGES/SPEAKERS",
  component: Speakerone,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <Speakerone {...args} />
    </BrowserRouter>
  </AudioState>
);

export const SpeakerOne = Template.bind({});