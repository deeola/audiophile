import React from "react";

import ProductWithImage from "../../../../components/Category/shared/ProductWithImage";
import image from "../../../../assets/category-headphones/mobile/image-xx99-mark-two.jpg";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/CATEGORY/SHARED",
  component: ProductWithImage,
};

const Template = (args) => (
  <BrowserRouter>
    <ProductWithImage
      img={image}
      subtitle={
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
      }
      title={"XX91 HEADPHONES"}
      np={"NEW PRODUCT"}
      link={""}
      primary="primary"
      label={"SEE PRODUCT"}
      {...args}
    />
  </BrowserRouter>
);

export const Productwithimage = Template.bind({});

Productwithimage.args = {
  primary: true,
  label: "SEE PRODUCT",
};
