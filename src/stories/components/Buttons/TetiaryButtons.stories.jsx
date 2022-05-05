import React from "react";
import { BrowserRouter } from "react-router-dom";

import { TetiaryButton } from "../../../components/Buttons/Button";

export default {
  title: "Components/Buttons",
  component: TetiaryButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <TetiaryButton span={'>'}  {...args} />
  </BrowserRouter>
);

export const Tertiary = Template.bind({});
Tertiary.args = {
  primary: true,
  label: "SHOP",
};
