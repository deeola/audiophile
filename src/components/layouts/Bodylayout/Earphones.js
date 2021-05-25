import React from 'react';
import { Link} from 'react-router-dom';
import earphones from '../../../assets/home/desktop/earphones.jpg';
import earphonestab from '../../../assets/home/tablet/earphonestab.jpg';



function Earphones(props) {

    
    return (
        
        <div className='earphonesDiv' style={{display:'flex'}}>
            <div className='earphoneImageDiv' >
                <img className='earphonesDesktop' src={earphones} alt='earbud'></img>
            </div>
            <div className='earphonestab'>
                <img src={earphonestab} alt='earbud'></img>
            </div>
            <div className='earphoneTextDiv'>
                <div className='earphoneText'>
                    <p>YX1 earphones</p>
                    <Link to='/yx1' >see product</Link>
                    
                </div>

            </div>

        </div>
    )
}



export default Earphones;

