import styled from 'styled-components';


export const CartContainer = styled.div`
background-color: white;
width: 25%;
padding: 20px;
border-radius: 5px;
top: 1.3%;
left: 65%;
margin-top: 30px;
position: absolute;
@media (max-width: 802px) {
    width: 45%;
    left: 45%;
    margin-top: 30px;
  }

  @media (max-width: 490px) {
    width: 80%;
    left: 10%
  }
`