import { Link } from "react-router-dom";
import styled from "styled-components";

const orange = "#d87d4a";

const veryblack = "#000000";

const verylightgray = "#ffffff";

export const Buttons = styled(Link)`
  background-color: ${(props) => (props.primary ? orange : "none")};
  color: ${(props) => (props.primary ? verylightgray : veryblack)};
  width: 160px;
  height: 48px;
  border: ${(props) => (props.primary || props.tetiary ? "unset" : `1px solid ${veryblack}`)};
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:13px;
  line-height:17.76px;
  font-weight: 700;



  span {
    color: ${orange};
    text-align : center;
    margin-left : 2px;
  }
`;
