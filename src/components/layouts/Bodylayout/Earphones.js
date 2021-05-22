import React from 'react'

function Earphones(props) {
    return (
        <div className='earphonesDiv' style={{display:'flex'}}>
            <div className='earphoneImageDiv' >
                <img src={"/assets/home/desktop/image-earphones-yx1.jpg"} alt='earbud image'></img>
            </div>
            <div className='earphoneTextDiv'>
                <div className='earphoneText'>
                    <p>YX1 earphones</p>
                    <button>See product</button>
                </div>

            </div>

        </div>
    )
}



export default Earphones

