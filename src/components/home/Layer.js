import React from 'react'


function Layer(props) {

    const {openBucket} = props

    return (

        
        <div className='layer' style={openBucket()}>
            
        </div>
    )
}

export default Layer;

