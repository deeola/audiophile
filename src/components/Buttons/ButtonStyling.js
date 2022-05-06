import { Link } from "react-router-dom";
import styled from "styled-components";

const orange = "#d87d4a";

const veryblack = "#000000";

const verylightgray = "#ffffff";
const lightorange = '#FBAF85';

const handleColorType = (colors) => {
  switch (colors) {
    case "primary":
      return `color: ${verylightgray}; background: ${orange};`;
    case "secondary":
      return `color: ${veryblack}; background: ${"none"}; border : 1px solid ${veryblack}  `;
    case "tertiary":
      return `color: ${verylightgray}; background: ${"none"}; justify-content: "space-between";`;
    default:
      return `color: ${verylightgray}; background: black;`;
  }
};

// handle hover

const handleHover= (hover) => {
    switch (hover) {
      case "primary":
        return `color: ${verylightgray}; background: ${lightorange};`;
      case "secondary":
        return `color: ${"white"}; background: ${veryblack};`;
      case "tertiary":
        return `color: ${orange}; background: ${"none"};`;
      default:
        return `color: ${"black"}; background: ${"none"}; border:1px solid ${veryblack};`;
        
    }
};

const handleSpacebetween = (space) => {
    switch (space) {
      case "spacebetween":
        return "justify-content: space-between;";
      default:
        return "justify-content: center;";
    }
};


export const Buttons = styled(Link)`
  width: 160px;
  height: 48px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 17.76px;
  font-weight: 700;
  ${({ color }) => handleColorType(color)};
  ${({ space }) => handleSpacebetween(space)};
  span {
    color: ${orange};
    font-size: 13px;
    margin-left: 10px;
  }

  &:hover{
    ${({ hover }) => handleHover(hover)};
  }
`;
