import React from "react";
import { BrowserRouter } from "react-router-dom";
import Shop from "../../../../components/shared/Shop/Shop";
export default {
    title: "Components/Shop",
    component: Shop,
   
  };

  const Template = (args) => (
    <BrowserRouter>
      <Shop {...args} />
    </BrowserRouter>
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
  };

