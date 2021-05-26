import React from 'react'


function SpeakerTwoEar(props) {
    return (
        <div>
            <div style={{display:'flex'}}>
                <p>{props.number}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}


export default SpeakerTwoEar

