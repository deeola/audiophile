import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import SpeakersPage from "../../pages/SpeakersPage";

export default {
  title: "PAGES/SpeakerMainPage",
  component: SpeakersPage,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <SpeakersPage {...args} />
    </BrowserRouter>
  </AudioState>
);

export const Speaker = Template.bind({});