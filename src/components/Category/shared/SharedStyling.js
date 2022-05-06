
import styled from "styled-components";

export const ProductWithImageCont = styled.div`
display: flex;
justify-content : space-between;
flex-direction: ${props => props.primary ? 'row-reverse' : 'row'};
align-items :center;
margin :80px auto;
`
export const Imagecontainer = styled.div`
width : 45%;
`

export const Image = styled.img`
width: 45%;
display: block;
`

export const ProductDetailsGeneral = styled.article`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 45%;
`

export const ProductContainer = styled.div`
margin-bottom  : 30px;
width : 75%;
`

export const Title = styled.h2`
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 44px;
letter-spacing: 1.42857px;
text-transform: uppercase;

`
export const SubTitle = styled.p`
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
color: #000000;
mix-blend-mode: normal;
opacity: 0.5;
margin: 10px 0px;
`


export const NewProduct= styled.p`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
letter-spacing: 10px;
text-transform: uppercase;
color: #D87D4A;
`