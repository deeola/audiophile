import styled from "styled-components";
import desktop from "../../../assets/home/desktop/earphones.jpg";
import tablet from "../../../assets/home/tablet/earphonestab.jpg";
import mobile from "../../../assets/home/mobile/image-earphones-yx1.jpg";

export const HomeEarphoneContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px auto;
  @media (max-width: 490px) {
    flex-direction: column;
  }
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

      @media (max-width: 490px) {
       
        padding: 100px 30px !important;
        margin-bottom :20px;
      }
      `;
    default:
      return `background: #f1f1f1;
      
      `;
  }
};
export const ContDiv = styled.div`
  width: 49%;
  padding: 90px 80px;
  border-radius: 10px;
  ${({ img }) => handleBackground(img)};


  @media (max-width: 802px) {
    padding: 100px 40px;
  }

  @media (max-width: 490px) {
    width: 100%;
    padding: 50px 30px;
  }
`;

export const Image = styled.img`
  width: 100%;
  display: block;
`;
