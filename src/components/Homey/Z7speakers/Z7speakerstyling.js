import styled from 'styled-components';
import desktopbackground from '../../../assets/home/desktop/image-speaker-zx7.jpg'
import tabletbackground from '../../../assets/home/tablet/image-speaker-zx7.jpg'
import mobilebackground from '../../../assets/home/mobile/image-speaker-zx7.jpg'

let background = desktopbackground

if (window.innerWidth < 802) {
 background= tabletbackground;
} else if (window.innerWidth <= 490) {
  background = mobilebackground;
}

export const ZBackground = styled.div`
width: 100%;
  margin: 40px auto;
  background-size: cover;
  background-position: center;
  background-image: url(${background});
  padding : 100px 70px;
  background-repeat: no-repeat;
  border-radius: 10px;

  @media (max-width: 490px) {
    padding : 100px 0px 100px 20px;
  }
`

export const DescCont = styled.div``

export const Title = styled.h4`
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 2px;
margin-bottom : 40px;
@media (max-width: 490px) {
  width:100%;
  margin-bottom : 20px;
}
`
