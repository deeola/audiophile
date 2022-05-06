import styled from 'styled-components';

const gray =  "#f1f1f1";

export const MenuContainer = styled.div`
display : flex;
justify-content: space-between;
width: 100%;
margin: 40px auto;
background: white;
align-items: center;
flex-direction : column;
`


export const SingleMenuContainer = styled.div`
width : 30%;
height: 80%;
position : relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
z-index : 2;

&:before{
    width: 100%;
    height: 70%;
    position: absolute;
    content: '';
    background-color:#f1f1f1;
    bottom : 0;
    left: 0;
    z-index: -1;    
}

@media ( max-width : 802px){
    width : ${props => props.mobile ? "100%" : "80%"};
    margin: 20px auto;



}

`

export const Text = styled.p``


export const MenuImage = styled.img`
width: 50%;
display: block;
`

export const MenuCont = styled.div`
position : absolute;
z-index:2;
top : 30px;
width : 100%;

  @media (max-width: 802px){
   
  }

`