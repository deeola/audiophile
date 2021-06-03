import React from 'react';
import { Link } from 'react-router-dom';

function Zspeaker(props) {
    return (
        <div className='zspeakermain'>
            <div className='zspeakerDiv'>
                <p className='zspeakertitle'>ZX7 SPEAKER</p>
                <button><Link to='/zx7' className='shopTextLinkSecond'>SEE PRODUCT</Link> </button>
            </div>
        </div>
    )
}


export default Zspeaker

