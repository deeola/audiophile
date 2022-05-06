import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 40px auto;
  background: white;
  @media (max-width: 802px) {
    flex-direction: column;
  }
`;
