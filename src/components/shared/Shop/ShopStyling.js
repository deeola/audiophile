import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 40px auto;
  background: white;
  @media (max-width: 802px) {
    flex-direction: column;
  }
`;
