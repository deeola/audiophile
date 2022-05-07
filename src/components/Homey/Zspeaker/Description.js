import React from "react";
import { Desc, Subtitle, Title } from "./Zspeakerstyling";
import {BlackButton } from '../../Buttons/Button';

const Description = ({ title, subtitle }) => {
  return (
    <Desc>
      <Title data-testid='desctitle'>{title}</Title>
      <Subtitle data-testid='descsubtitle'>{subtitle}</Subtitle>
      <BlackButton  label={"SEE PRODUCT"} link='/zx9' />
    </Desc>
  );
};

export default Description;
