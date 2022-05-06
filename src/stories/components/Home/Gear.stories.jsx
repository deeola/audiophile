
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Gear from "../../../components/Homey/Gear/Gear";

export default {
  title: "Components/HOME",
  component: Gear,
};

const Template = (args) => (
  <BrowserRouter>
    <Gear {...args} />
  </BrowserRouter>
);

export const gear = Template.bind({});
gear.args = {
  primary: true,
};


