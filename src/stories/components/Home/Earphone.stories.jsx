import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeEarphone from "../../../components/Homey/Earphone/HomeEarphone";
import { HomeControl } from "../../../pages/homestyling";

export default {
  title: "Components/HOME",
  component: HomeEarphone,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => (
  <BrowserRouter>
    <HomeEarphone {...args} />
  </BrowserRouter>
);

export const Earphone = Template.bind({});
