import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const PaymentRightTop = styled.div`

display : flex;
border: 1px solid green;
flex-direction: reverse-row;
height: 50px;
position: relative;
align-items: center;
padding: 15px 10px ;


label{

    position: absolute;
    padding: unset;
 left: 50px;
 top: 10px;
 align-self: center;
 cursor: pointer;
}

input{
    background: green;
    height: unset;
    padding: unset;
    width: unset;
    margin-top: 0px;
}

`;


export const PaymentRight = styled.div`
width: 50%;




`;
export const PaymentRightBottom = styled.div`
`;
export const PaymentMethod = styled.p`
width: 20%;
background: green;
`
export const PayementSectionContainer = styled.div`
display: flex;

margin: 20px 0px;
justify-content: space-between;
`;

export const EMoneyContainer = styled.div``;

export const CashOnDeliveryContainer = styled.div``

export const Icon = styled(FontAwesomeIcon)``

export const CashText = styled.p``
