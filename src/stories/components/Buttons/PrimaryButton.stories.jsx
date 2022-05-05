import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Button } from "../../../components/Buttons/Button";

export default {
  title: "Components/Buttons",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <Button label={'SEE PRODUCT'} {...args} />
  </BrowserRouter>
);

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  primary: true,
  label: "SEE PRODUCT",
};
