import React from "react";
import { BlackBackground, Title } from "./Herostyling";

function ProductHero({ title }) {
  return (
    <BlackBackground>
      <Title data-testid='title'>{title}</Title>
    </BlackBackground>
  );
}

export default ProductHero;
