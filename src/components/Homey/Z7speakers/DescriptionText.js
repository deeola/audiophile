import React from "react";
import { SecondaryButton } from "../../Buttons/Button";
import { DescCont, Title } from "./Z7speakerstyling";

const DescriptionText = ({ title, link }) => {
  return (
    <DescCont>
      <Title data-testid='title'>{title}</Title>
      <SecondaryButton label={"SEE PRODUCT"} link={link} />
    </DescCont>
  );
};

export default DescriptionText;
