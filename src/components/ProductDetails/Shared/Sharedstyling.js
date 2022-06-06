import styled from "styled-components";

const orange = "#d87d4a";


const verylightgray = "#ffffff";
const lightorange = "#FBAF85";

export const PriceCont = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
`;

export const Itemcontrolcont = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f1f1;
  width: 160px;
  height: 48px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 17.76px;
  font-weight: 700;
  padding: 0px 15px;
  margin-right: 40px;
`;

export const Controls = styled.p`
  color: gray;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: ${orange};
  }
`;

export const Number = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
  text-transform: uppercase;
`;

export const PriceProductCont = styled.div``;

export const ControlCartCont = styled.div`
  display: flex;
  align-items: center;
  // justify-content :space-between;
  margin-top: 40px;
`;
export const GobackCont = styled.p`
  margin: 50px 0px;
  cursor: pointer;
`;

export const AddButtonContainer = styled.button`
  width: 160px;
  height: 48px;
  text-align: center;
  text-decoration: none;
  align-items: center;
  font-size: 13px;
  line-height: 17.76px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;

  color: ${verylightgray};
  background: ${orange};

  &:hover {
    color: ${verylightgray};
    background: ${lightorange};
  }
`;

export const GeneralDetailsCont = styled.div`
  width: 45%;
`;

export const GeneralImageContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
