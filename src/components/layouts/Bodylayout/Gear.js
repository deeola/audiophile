import React from 'react'


function Gear(props) {

    return (
        <div className='Gear'>
            <div className='GearTextDiv'>
                <div className='ggtext'>
                <p className='gearmaintitle'>Bringing you the <span>best</span>  audio gear</p>
                <p className='gmaintext'>  Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>

                </div>
                

            </div>
            <div className='gearImageDiv'>
                <img src={"/assets/shared/desktop/image-best-gear.jpg"}  alt='man with headphone'></img>
            </div>
        </div>
    )
}


export default Gear

