import styled from "styled-components";
import { Colors } from "../../../Themes";

export const ShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px auto;
  background: ${Colors.white};

  @media (max-width: 490px) {
    flex-direction: column;
   
  }
`;
