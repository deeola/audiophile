import React from 'react'


function Footer(props) {
    const styles={
        background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg')`,
        backgroundPosition: 'center',
        backgroundSize:'center',
        marginTop:'38px',

        height:'365px',
        position:'relative',
        margin:'auto'
    }
    return (
        <div   style={styles}>
        </div>
    )
}


export default Footer

