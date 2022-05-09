import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const orange = "#d87d4a";
const verylightgray = "#ffffff";

export const FooterContainer = styled.footer`
  background: black;
  padding: 70px 0px;
`;

export const FooterControl = styled.div`
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 490px) {
    align-items: center;
}

`;

export const FooterNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 802px) {

    flex-direction: column;
    align-items: unset;
}

@media (max-width: 490px) {
    align-items: center;
}



`;

export const FooterList = styled(Link)`
text-transform: uppercase;
  list-style: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  color: white;
  @media (max-width: 802px) {

    width: 30%;
}

@media (max-width: 490px) {

    width: 100%;
}
  
  
`

export const FooterDescription = styled.div`
  display: flex;
  justify-content: space-between;
@media (max-width: 802px) {
   margin-top: 50px;
}
@media (max-width: 490px) {
    flex-direction: column;
    text-align:center;
   
 }
`;

export const SubText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
  width: 50%;
  margin: 40px 0px 0px 0px; 


  @media (max-width: 802px) {
    width: 100%;
}

@media (max-width: 490px) {
    text-align:center;
 }

`;

export const SocialMediaIcons = styled.div`
  
`;

export const Icon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 20px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: ${orange};
  }

  @media (max-width: 490px) {
   
    margin-right: 20px;
 }
`;

export const Copyright = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  /* identical to box height, or 167% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 40px;

  span {
    color: ${orange};
  }

  @media (max-width: 802px) {
      align-items: unset;
      padding-top: 0px;
}

@media (max-width: 490px) {
    align-items: center;
    text-align:center;
    padding-top: 0px;
    margin-bottom: 40px;
 }
`;

export const NavList = styled.ul`
  color: ${verylightgray};
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 802px) {

    width: 70%;
    margin: 30px 0px 0px 0px;
    align-items: left;
    padding-left: 0px;
}

@media (max-width: 490px) {
   flex-direction: column;
}
`;
export const List = styled(Link)`
  text-transform: uppercase;
  list-style: none;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  color: white;
  &:hover {
    color: ${orange};
    cursor: pointer;
  }

  @media (max-width: 802px) {

    margin-left:0px;
}

@media (max-width: 490px) {
    margin-top: 20px;
    font-weight: 700;
font-size: 13px;
line-height: 25px;
/* identical to box height, or 192% */

letter-spacing: 2px;
text-transform: uppercase;
 }

 
`;


