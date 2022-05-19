import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import EarphonePage from "../../pages/EarphonePage";


export default {
  title: "PAGES/EarphonesMainPage",
  component: EarphonePage,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <EarphonePage {...args} />
    </BrowserRouter>
  </AudioState>
);

export const Earphone = Template.bind({});