import React from "react";
import LogoComponent from "../../../../components/shared/Navbar/LogoComponent";
import logo from '../../../../assets/shared/desktop/logo.svg'


export default {
    title: "Components/Navbar/Logo",
    component: LogoComponent
  };

  const Template = (args) => (
      <LogoComponent {...args} />
  
  );
  
  export const Primary = Template.bind({});
  Primary.args = {
    primary: true,
    img : logo
  };
  