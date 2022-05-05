import { Link } from "react-router-dom";
import styled from "styled-components";


//colors

const orange =  "#d87d4a"
// const orangelight =  '#fbaf85';
// const black =  "#272727";
// const veryblack =  "000000";
// const grays =  "f1f1f1";
// const lightgray = "#fafafa";
const verylightgray = " #ffffff";
// const rectangle =  "rgb(78, 78, 78)";

export const Nav = styled.nav`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  padding-top: 20px;
  top: 0;
  z-index: 200;
  margin: auto;
`;

// Logo and Links

export const LogoContainer = styled.div`
  display: flex;

`;

export const HamContainer = styled.div`
display: none;
@media (max-width: 802px) {

    display:block;
}
`


export const Logo = styled.img``;

export const Ham = styled.img`
 width:100%;

`;

// Links

export const NavList = styled.ul`
    color: ${verylightgray};
    width: 40%;
    margin-right: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content : space-between;
    @media (max-width: 802px) {

        display:none;
    }
 

`;
export const List = styled(Link)`
  text-transform: uppercase;
  list-style: none;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 700;
  font-size: 13px;

  color: white;
  &:hover {
    color: ${orange};
    cursor: pointer;
  }
`;

//Cart

export const Cart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CartImage = styled.img`
  cursor: pointer;
`;
export const CartLength = styled.p`
  font-weight: 700;
  color: ${orange};
  text-decoration: none;
  margin-left: 10px;
`;
