import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

const orange = "#d87d4a";
const veryblack = "#000000";

const verylightgray = "#ffffff";
const lightorange = '#FBAF85';


export const OrderSuccessContainer = styled.div`
  background: ${lightorange};
  padding: 20px;
  width: 40%;
  position: absolute;
  top: 30vh;
  left: 50vh;

`;
export const ThankyouContainer = styled.h1`
  width: 50%;
  text-transform: uppercase;
  margin: 10px 0px;
`;

export const Confirmation = styled.p`
  font-size: 14px;
  color: gray;
  margin: 10px 0px;
`;

export const LeftOrdered = styled.div`
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: ${verylightgray};
`;
export const RightOrdered = styled.div`
  background: black;
  padding: 30px;
  width: 50%;
`;
export const GrandTotal = styled.p`
  color: gray;
`;
export const GrandTotalPrice = styled.p`
  color: white;
`;
export const OrderedItemsContainer = styled.div`
  display: flex;
  margin: 20px 0px;
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${orange};
  font-size: 30px;
  margin: 20px 0px;
`;

export const BackToHome = styled(Link)`
  width: 100%;
  padding: 10px 0px;
  background: ${orange};
  text-decoration: none;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const OtherItems = styled.p`
padding-top: 7px;
display: block;
border-top: 1px solid black;
text-align: center;
font-size: 13px;
`
