import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../../../../components/shared/Footer/Footer";


export default {
  title: "Components/FOOTER",
  component:Footer,
 
};

const Template = (args) => (
  <BrowserRouter>
    <Footer {...args} />
  </BrowserRouter>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};