import styled from "styled-components";
import bgpattern from "../../../assets/home/desktop/pattern-circles.svg";
import { Colors } from "../../../Themes";

//containers

export const ZspeakerConatiner = styled.div`
  background: ${Colors.orange};
  background-image: url(${bgpattern});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin: 40px auto;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-size: 750px;

  @media (max-width: 802px) {
    background-size: center;
  }
`;

export const DescriptionImageWrapper = styled.div`
  width: 75%;
  margin: auto auto 0px auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  padding-top: 120px;

  @media (max-width: 802px) {
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    width: 100%;
    justify-content: center;
  }
`;

export const Desc = styled.div`
  width: 40%;
  padding-bottom: 120px;

  @media (max-width: 802px) {
    width: 70%;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
    margin-top: 50px;
  }

  @media (max-width: 490px) {
    width: 90%;
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 56px;
  @media (max-width: 802px) {
    text-align: center;
    width: 50%;
  }

  @media (max-width: 490px) {
    width:70%;
  }
`;

export const Subtitle = styled.p`
  font-size: 15px;
  text-align: left;
  margin: 30px 0px;
  line-height: 25px;
  color: ${Colors.white};
  @media (max-width: 802px) {
    text-align: center;
    width: 70%;
  }

  @media (max-width: 490px) {
    width:80%;
    margin: 10px 0px;
  }
`;

//image

export const Zimage = styled.img`
  width: 41%;
  display: block;

  @media (max-width: 802px) {
    width: 30%;
  }
`;
