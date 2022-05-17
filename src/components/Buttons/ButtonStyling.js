import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../Themes";


const orange = "#d87d4a";

const veryblack = "#000000";

const verylightgray = "#ffffff";
const lightorange = '#FBAF85';

const handleColorType = (colors) => {
  switch (colors) {
    case "primary":
      return `color: ${Colors.lightgray}; background: ${Colors.orange};`;
    case "secondary":
      return `color: ${Colors.black}; background: ${"none"}; border : 1px solid ${Colors.black}  `;
    case "tertiary":
      return `color: ${Colors.lightBlack}; background: ${"none"}; justify-content: "space-between"; `;
    default:
      return `color: ${Colors.lightgray}; background: black;`;
  }
};

// handle hover

const handleHover= (hover) => {
    switch (hover) {
      case "primary":
        return `color: ${Colors.lightgray}; background: ${Colors.lightOrange};`;
      case "secondary":
        return `color: ${Colors.white}; background: ${Colors.black};`;
      case "tertiary":
        return `color: ${Colors.orange}; background: ${"none"};`;
      default:
        return `color: ${Colors.black}; background: ${"none"}; border:1px solid ${Colors.black};`;
        
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
  text-transform: uppercase;
  ${({ color }) => handleColorType(color)};
  ${({ space }) => handleSpacebetween(space)};
  span {
    color: ${orange};
    font-size: 15px;
    margin-left: 10px;
  }

  &:hover{
    ${({ hover }) => handleHover(hover)};
  }
`;
