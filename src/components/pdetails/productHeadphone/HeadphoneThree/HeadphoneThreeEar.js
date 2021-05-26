import React from 'react'
import PropTypes from 'prop-types'

function HeadphoneThreeEar(props) {
    return (
        <div>
            <div style={{display:'flex'}}>
                <p>{props.number}</p>
                <p>{props.name}</p>
            </div>
            
        </div>
    )
}

export default HeadphoneThreeEar

