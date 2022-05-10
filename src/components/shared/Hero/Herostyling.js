import styled from "styled-components";
import background from "../../../assets/home/desktop/image-hero.jpg";
import tablet from "../../../assets/home/tablet/image-header.jpg";

export const BlackBackground = styled.div`
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Lines = styled.div`
  width: 100%;
  height: 1px;
  background: white;
  margin: 20px 0px;
  content: "";
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.2;
`;

export const Title = styled.h1`
  color: white;
  text-transform: uppercase;
  font-size: 50px;
`;

export const HeroBackground = styled.header`
//   height: 729px;
  left: 3px;
  top: 0px;
  background: #191919;
  width: 100%;
  background: url(${background});

  @media (max-width: 802px) {
    background: url(${tablet});
    background-position: center;
    background-size: cover;
  }
`;

export const HeroControl = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const HeroPictureControl = styled.div`
  width: 70%;
`;
export const HeroPicture = styled.img`
  width: 100%;
  display: block;
  border: 2px solid blue;
`;

export const NewProductText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const HeroTextControl = styled.div`
  width: 40%;
  margin: 140px 0px;
  @media (max-width: 802px) {
    width: 100%;
    margin: 100px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 58px;
  /* or 104% */

  letter-spacing: 2px;
  text-transform: uppercase;

  color: #ffffff;
  margin: 30px 0px;

  @media (max-width: 802px) {
    width: 80%;
    text-align:center;
    
  }
`;

export const SubHeading = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  /* or 167% */

  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
  width: 80%;
  margin-bottom: 20px;

  @media (max-width: 802px) {
    width: 70%;
    text-align:center;
    
  }
`;
