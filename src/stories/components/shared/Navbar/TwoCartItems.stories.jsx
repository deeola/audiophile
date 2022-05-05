import React from "react";
import Carts from "../../../../components/shared/Navbar/Carts";
import cartimg from "../../../../assets/shared/desktop/cart.svg";


export default {
  title: "Components/Navbar/Cart/Four-Items",
  component: Carts,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};


let CartLength = 4;

const Template = (args) => (<Carts func={() => console.warn("Hey, I'm working")} cartimg={cartimg} ci={2}  cartlength={CartLength} {...args} />);

export const FourItems = Template.bind({});
FourItems.args = {
  primary: true,
  ci: 2,
  cartLength : 6
};
