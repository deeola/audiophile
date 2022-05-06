
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeEarphone from "../../../components/Homey/Earphone/HomeEarphone";



export default {
  title: "Components/HOME",
  component: HomeEarphone,
};

const Template = (args) => (
  <BrowserRouter>
    <HomeEarphone {...args} />
  </BrowserRouter>
);

export const Earphone = Template.bind({});

