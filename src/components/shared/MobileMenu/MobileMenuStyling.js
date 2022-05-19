import styled from "styled-components";
import { Colors } from "../../../Themes";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px auto;
  background: white;
  align-items: center;
  flex-direction: column;
`;

export const SingleMenuContainer = styled.div`
  width: 30%;
  height: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

  &:before {
    width: 100%;
    height: 70%;
    position: absolute;
    content: "";
    background-color: ${Colors.gray};
    bottom: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 802px) {
    width: ${(props) => (props.mobile ? "30%" : "80%")};
    margin: 20px auto;
  }

  @media (max-width: 490px) {
    width: ${(props) => (props.mobile ? "100%" : "80%")};
  }
`;

export const Text = styled.p``;

export const MenuImage = styled.img`
  width: 50%;
  display: block;
`;

export const MenuCont = styled.div`
  position: absolute;
  z-index: 2;
  top: 30px;
  width: 100%;
  @media (max-width: 802px) {
  }
`;
