import { Link } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "../../../Themes";

//colors

export const Nav = styled.nav`
  width: 100%;
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
    display: block;
  }
`;

export const Logo = styled.img``;

export const Ham = styled.img`
  width: 100%;
`;

// Links

export const NavList = styled.ul`
  color: ${Colors.white};
  width: 40%;
  margin-right: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 802px) {
    display: none;
  }
`;
export const List = styled(Link)`
  text-transform: uppercase;
  list-style: none;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 700;
  font-size: 13px;
  color: ${Colors.white};
  &:hover {
    color: ${Colors.orange};
    cursor: pointer;
  }
`;

//Cart

export const Cart = styled.div`
  display: flex;
  align-items: center;
`;
export const CartImage = styled.img`
  cursor: pointer;
`;
export const CartLength = styled.p`
  font-weight: 700;
  color: ${Colors.orange};
  text-decoration: none;
  margin-left: 10px;
`;

export const ProductNavCont = styled.div`
  height: 97px;
  width: 100%;
  left: 0px;
  top: 0px;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
