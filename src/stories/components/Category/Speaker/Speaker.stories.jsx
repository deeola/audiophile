import SpeakerBody from "../../../../components/Category/Speakers/SpeakerBody";
import React from "react";
import { BrowserRouter } from "react-router-dom";


export default {
    title: "Components/CATEGORY/SPEAKER",
    component: SpeakerBody,
  };
  
  const Template = (args) => (
    <BrowserRouter>
      <SpeakerBody  {...args} />
    </BrowserRouter>
  );
  
  
  
  export const Speaker = Template.bind({});
  
Speaker.args = {
    primary: true,
    label: "SEE PRODUCT",
  };
  