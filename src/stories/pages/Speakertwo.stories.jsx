import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import Speakertwo from '../../pages/Speakertwo'

export default {
  title: "PAGES/SPEAKERS",
  component: Speakertwo,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <Speakertwo {...args} />
    </BrowserRouter>
  </AudioState>
);

export const SpeakerTwo= Template.bind({});