import styled from 'styled-components';


export const CartContainer = styled.div`
background-color: white;
width: 25%;
padding: 20px;
border-radius: 5px;
top: 60px;
right: 140px;
margin-top: 30px;
position: absolute;
z-index: 500;
-webkit-box-shadow: 0 15px 10px #777;
  -moz-box-shadow: 0 15px 10px #777;
  box-shadow: 0 15px 10px #777;
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