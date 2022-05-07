import React from "react";
import { BrowserRouter } from "react-router-dom";
import Headphones from "../../../../components/Category/Headphones/Headphones";




export default {
  title: "Components/CATEGORY/HEADPHONE",
  component: Headphones,
};

const Template = (args) => (
  <BrowserRouter>
    <Headphones  {...args} />
  </BrowserRouter>
);



export const Headphone = Template.bind({});

Headphone.args = {
  primary: true,
  label: "SEE PRODUCT",
};

