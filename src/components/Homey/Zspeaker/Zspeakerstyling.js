import styled from "styled-components";
import bgpattern from "../../../assets/home/desktop/pattern-circles.svg";


//containers

export const ZspeakerConatiner = styled.div`
  background: #d87d4a;
  background-image: url(${bgpattern});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  position: relative;
  margin: 40px auto ;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  background-size: 750px ;

`;

export const DescriptionImageWrapper = styled.div`

width: 75%;
margin: auto auto 0px auto;
display: flex;
justify-content: space-between;
position:relative;
padding-top: 120px;
`

export const Desc = styled.div`
width : 40%;
padding-bottom: 120px;


`;

export const Title = styled.h1`

color: white;
font-size: 56px;

`;

export const Subtitle = styled.p`
font-size:15px;
text-align: left;
margin: 20px 0px;
line-height: 25px;
color: #FFFFFF;
`;

//image

export const Zimage = styled.img`
width: 41%;
display: block;

`;


