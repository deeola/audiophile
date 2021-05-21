import React from 'react'
import PropTypes from 'prop-types'

function Gear(props) {
    const styles={
        background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg')`,
        backgroundPosition: 'center',
        backgroundSize:'center',
        marginTop:'38px',
        height:'588px',
        width:'1110px',
        position:'relative',
        margin:'auto'
    }
    return (
        <div   style={styles}>
        </div>
    )
}

Gear.propTypes = {

}

export default Gear

