import React from "react";
import { BrowserRouter } from "react-router-dom";

import Links from "../../../../components/shared/Navbar/Links";

export default {
  title: "Components/Navbar/Links",
  component: Links,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Links {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Home",
};

