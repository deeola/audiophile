import styled from "styled-components";
import desktop from "../../../assets/home/desktop/earphones.jpg";
import tablet from "../../../assets/home/tablet/earphonestab.jpg";
import mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

export const HomeEarphoneContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 40px auto;
`;

const handleBackground = (img) => {
  //use window width to deternine image source
  let src = desktop;
  if (window.innerWidth < 802) {
    src = tablet;
  } else if (window.innerWidth < 490) {
    src = mobile;
  }

  switch (img) {
    case "left":
      return `
      background-image: url(${src}); 
    position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      content : '';
      position : relative;
      `;
    default:
      return `background: #f1f1f1;`;
  }
};
export const ContDiv = styled.div`
  width: 49%;
  padding: 110px 80px;
  ${({ img }) => handleBackground(img)};
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;
