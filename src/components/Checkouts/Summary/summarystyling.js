import styled from "styled-components";
const orange = "#d87d4a";
const veryblack = "#000000";
const verylightgray = "#ffffff";
const lightorange = "#FBAF85";


export const SummaryContainer = styled.div`
background: white;
padding: 20px;
`;

export const ItemQuantity = styled.div``;

export const CartQty = styled.p`
  span {
  }
`;

export const ContineandPayContainer = styled.button`
  width: 100%;
  height: 40px;
  background: ${orange};
  text-align: center;
  color: white;
  cursor: pointer;

  &:hover {
    background: ${lightorange};
  }
`;

export const PriceAmount = styled.p`
  color: ${(props) => (props.primary ? `${orange}` : "black")};
  font-weight: 700;

`;

export const SummaryTop = styled.h3`

`;

export const PriceLabel = styled.p``;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`;
