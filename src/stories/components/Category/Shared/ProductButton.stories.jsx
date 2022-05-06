import React from "react";
import { BrowserRouter } from "react-router-dom";
import ProductButton from "../../../../components/Category/shared/ProductButton";




export default {
  title: "Components/CATEGORY/SHARED",
  component: ProductButton,
};

const Template = (args) => (
  <BrowserRouter>
    <ProductButton subtitle={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'} title={'XX91 HEADPHONES'} np={'NEW PRODUCT'}  link={''} {...args} />
  </BrowserRouter>
);



export const ProductButtons = Template.bind({});

ProductButtons.args = {
  primary: true,
  label: "SEE PRODUCT",
};
