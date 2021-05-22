import React from 'react'
import FooterNav from './FooterNav'



function Footer(props) {

    return (
        <div className='footer'>
            <FooterNav />
            <div className='footerSecondDiv'>
                <p className='footerSecondText'>  Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                <div className='icons'>
                    <div className='iconDiv'>
                        <img src={"/assets/shared/desktop/icon-facebook.svg"}></img>
                    </div>
                    <div className='iconDiv'>
                        <img src={"/assets/shared/desktop/icon-twitter.svg"}></img>
                    </div>
                    <div className='iconDiv'>
                        <img src={"/assets/shared/desktop/icon-instagram.svg"}></img>
                    </div>

                </div>


            </div>
            <p className='copyRight'>Copyright 2021. All Rights Reserved by  <span>Adeola Bamigboye</span> </p>
        </div>
    )
}


export default Footer

