import React from "react";
import { BrowserRouter } from "react-router-dom";

import { SecondaryButton } from "../../../components/Buttons/Button";

export default {
  title: "Components/Buttons",
  component: SecondaryButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <SecondaryButton label={'SEE PRODUCT'} {...args} />
  </BrowserRouter>
);

export const Secondary = Template.bind({});
Secondary.args = {
  primary: true,
  label: "SEE PRODUCT",
};
