import React from "react";
import { BrowserRouter } from "react-router-dom";

import { BlackButton } from "../../../components/Buttons/Button";

export default {
  title: "Components/Buttons",
  component: BlackButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <BlackButton label={'SEE PRODUCT'} {...args} />
  </BrowserRouter>
);

export const BlacButton = Template.bind({});
BlacButton.args = {
  primary: true,
  label: "SEE PRODUCT",
};

