import styled from "styled-components";
import desktop from "../../../assets/shared/desktop/gearimage.jpg";
import tablet from "../../../assets/shared/tablet/tabgear.jpg";
import mobile from "../../../assets/shared/mobile/mobilegear.jpg";


export const GearContainer = styled.section`
display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 80px auto;
`;


export const Left = styled.div`
width: 49%;
padding: 150px 0px;
`;

//use window width to deternine image source
let image = desktop;
if (window.innerWidth < 802) {
  image = tablet;
} else if (window.innerWidth < 490) {
  image = mobile;
}

export const Right = styled.div`
width: 49%;
  background-image: url(${image});
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  position: relative;
`;

export const Text = styled.div`
width: 90%;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 40px;
  width: 80%;
  margin: 30px 0px;
  span {
    color: #d87d4a;
  }
`;

export const Paragraph = styled.p``;
