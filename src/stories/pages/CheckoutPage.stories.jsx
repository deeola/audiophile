import React from "react";
import { BrowserRouter } from "react-router-dom";
import AudioState from "../../context/Audiophile/AudioState";
import Checkoutpage from '../../pages/Checkoutpage'


export default {
  title: "PAGES/Checkout",
  component: Checkoutpage,
};

const Template = (args) => (
  <AudioState>
    <BrowserRouter>
      <Checkoutpage  {...args} />
    </BrowserRouter>
  </AudioState>
);

export const Checkout = Template.bind({});