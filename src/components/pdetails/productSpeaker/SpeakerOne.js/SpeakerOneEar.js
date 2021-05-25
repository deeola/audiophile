import React from 'react'


function SpeakerOneEar(props) {
    return (
        <div>
            <div style={{display:'flex'}}>
                <p>{props.number}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

SpeakerOneEar.propTypes = {

}

export default SpeakerOneEar

