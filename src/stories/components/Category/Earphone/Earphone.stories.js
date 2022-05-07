
import React from "react";
import { BrowserRouter } from "react-router-dom";
import EarphoneBody from "../../../../components/Category/Earphone/EarphoneBody";




export default {
    title: "Components/CATEGORY/EARPHONE",
    component: EarphoneBody,
  };
  
  const Template = (args) => (
    <BrowserRouter>
      <EarphoneBody {...args} />
    </BrowserRouter>
  );
  
  
  
  export const Earphone = Template.bind({});
  
Earphone.args = {
    primary: true,
    label: "SEE PRODUCT",
  };
  