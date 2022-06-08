import { Link } from "react-router-dom";
import styled from "styled-components";

const orange = "#d87d4a";
const verylightgray = "#ffffff";


export const CheckoutButtonContainer = styled(Link)`
  background: ${orange};
  width: 100%;
  height: 48px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  line-height: 17.76px;
  font-weight: 700;
  margin-top: 40px;
  color: ${verylightgray};
`;
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.p``;

export const TotalPriceCon = styled.p`
  font-weight: 700;
`;

export const RemoveAllContainer = styled.p``;

export const CartCountContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 700;
  }
`;

export const CartItemsContainer = styled.div``;

export const CartControlButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CartControlAddRemove = styled.p``;
export const CartControlNumber = styled.p``;

export const DesktopItemImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;
export const TabletItemImage = styled.img`
  display: none;
  width: 100%;
`;
export const MobileItemImage = styled.img`
  display: none;
  width: 100%;
`;

export const ItemName = styled.p`
  font-size: 14px;
  font-weight: 700;


`;

export const ItemPrice = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: gray;
`;

export const ItemNamePrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 15px;
  justify-content: center;
`;

export const ImagePriceName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;

`;

export const Images = styled.div`
  width: 20%;
`;

export const CartImageControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;

export const CartTopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemImageCartControl = styled.div`
  width: 30%;
  padding: 0px 10px;
  background: #F1F1F1;

`;

export const ImagePriceInnerControl = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  align-items center;

`;


export const EmptyCartContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 20px 0px 10px 0px;
`

export const Empty = styled.p`
font-size: 13px;
padding: 10px 0px;
`

export const ContinueShopping = styled.button`
display: flex;
align-items:center;
padding: 10px;
width: 100%;
background: ${orange};
color: white;
justify-content: center;
font-weight: 700;
margin-top: 10px;
border: none;
outline: none;
`
