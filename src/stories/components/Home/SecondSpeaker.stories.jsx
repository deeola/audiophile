
import React from "react";
import { BrowserRouter } from "react-router-dom";
import SecondSpeaker from "../../../components/Homey/Z7speakers/ZSspeaker";



export default {
  title: "Components/HOME",
  component: SecondSpeaker,
};

const Template = (args) => (
  <BrowserRouter>
    < SecondSpeaker {...args} />
  </BrowserRouter>
);

export const ZX7 = Template.bind({});



