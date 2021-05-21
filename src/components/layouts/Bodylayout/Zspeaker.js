import React from 'react';

function Zspeaker(props) {
    const styles={
        background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/image-speaker-zx7.jpg')`
    }
    return (
        <div className='zspeakermain'   style={styles}>
            <div>
                <p>ZX7 SPEAKER</p>
                <button>SEE PRODUCT</button>
            </div>
        </div>
    )
}


export default Zspeaker

