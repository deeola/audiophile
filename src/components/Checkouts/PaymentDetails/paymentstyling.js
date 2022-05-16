import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const orange = "#d87d4a";

export const PaymentRightTop = styled.div`
  display: flex;
  border: 1px solid gray;
  flex-direction: reverse-row;
  height: 50px;
  position: relative;
  align-items: center;
  padding: 15px 10px;
  border-radius: 5px;
  margin-bottom: 13px;
  cursor: pointer;

  label {
    position: absolute;
    padding: unset;
    left: 50px;
    align-self: center;
    cursor: pointer;
    font-weight: 700;
    cursor: pointer;
  }

  input {
      color: gray;
    height: unset;
    padding: unset;
    width: unset;
    margin-top: 0px;

    &:checked {
        border: 1px solid orange;
        background: red;
    }
  }

 
`;

export const PaymentRight = styled.div`
  width: 50%;
`;

export const PaymentMethod = styled.p`
  width: 20%;
  font-weight: 700;
`;
export const PayementSectionContainer = styled.div`
  display: flex;

  margin: 20px 0px;
  justify-content: space-between;
`;

export const EMoneyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 98%;
  }
`;

export const CashOnDeliveryContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 20px;

`;

export const Icon = styled(FontAwesomeIcon)`
color: ${orange};
font-size: 50px;
width: 20%;
`;

export const CashText = styled.p`
width: 70%;
`;
