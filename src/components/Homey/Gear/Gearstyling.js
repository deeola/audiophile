import styled from "styled-components";
import desktop from "../../../assets/shared/desktop/gearimage.jpg";
import tablet from "../../../assets/shared/tablet/tabgear.jpg";
import mobile from "../../../assets/shared/mobile/mobilegear.jpg";

export const GearContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 50px auto;

  @media (max-width: 802px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 490px) {
  }
`;

export const Left = styled.div`
  width: 49%;
  margin: 130px 0px;
  @media (max-width: 802px) {
    width: 100%;
    margin: 0px 0px;
  }

  @media (max-width: 490px) {
  }
`;

//use window width to deternine image source

export const Right = styled.div`
  width: 49%;
  background-image: url(${desktop});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  position: relative;
  @media (max-width: 802px) {
    width: 100%;
    background-image: url(${tablet});
    height: 300px;
    background-position: center;
  }

  @media (max-width: 490px) {
    background-image: url(${mobile});
  }
`;

export const Text = styled.div`
  width: 90%;
  @media (max-width: 802px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 40px;
  width: 80%;
  margin: 30px 0px;
  span {
    color: #d87d4a;
  }
  @media (max-width: 802px) {
    text-align: center;
    margin: 30px auto;
  }

  @media (max-width: 490px) {
    width: 100%;
    font-size: 36px;
    margin: 20px 0px;
  }
`;

export const Paragraph = styled.p`
  @media (max-width: 802px) {
    text-align: center;
    width: 90%;
    margin: auto;
    line-height: 27px;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`;
