import React from 'react';
import earphones from '../../../assets/home/desktop/earphones.jpg';
import earphonestab from '../../../assets/home/tablet/earphonestab.jpg';


function Earphones(props) {
    return (
        <div className='earphonesDiv' style={{display:'flex'}}>
            <div className='earphoneImageDiv' >
                <img className='earphonesDesktop' src={earphones} alt='earbud image'></img>
            </div>
            <div className='earphonestab'>
                <img src={earphonestab} alt='earbud image'></img>
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

