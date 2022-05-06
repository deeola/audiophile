import React from "react";
import ProductDetails from "../../../../components/Category/shared/ProductDetails";

export default {
  title: "Components/CATEGORY/SHARED",
  component: ProductDetails,
};

const Template = (args) => (
  <ProductDetails
    subtitle={
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
    }
    title={"XX91 HEADPHONES"}
    np={"NEW PRODUCT"}
    link={""}
    {...args}
  />
);

export const ProductDetail = Template.bind({});

ProductDetail.args = {
  primary: true,
  label: "SEE PRODUCT",
};
