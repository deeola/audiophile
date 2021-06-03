import React from 'react'


function SpeakerOneEar(props) {
    return (
        <div>
            <div  className='boXFeat' style={{display:'flex'}}>
                <p className='boxquantity'>{props.number}x</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

SpeakerOneEar.propTypes = {

}

export default SpeakerOneEar

