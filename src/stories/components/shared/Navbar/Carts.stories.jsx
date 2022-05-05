import React from "react";
import Carts from "../../../../components/shared/Navbar/Carts";
import cartimg from "../../../../assets/shared/desktop/cart.svg";
import { CartImage } from "../../../../components/shared/Navbar/Navbarstyling";

export default {
  title: "Components/Navbar/Cart/Ten-Items",
  component: Carts,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};


let CartLength = 10;

const Template = (args) => (<Carts func={() => console.warn("Hey, I'm working")} cartimg={cartimg} ci={2}  cartlength={CartLength} {...args} />);


export const TenItems = Template.bind({});
TenItems.args = {
  primary: true,
  ci: 2,
  cartLength : 6
};



