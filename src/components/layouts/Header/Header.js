import React from 'react';
import Navbar from './Navbar';
import HeroText from './HeroText';

function Header(props) {

    const styles={
        background: `url('${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg')`,
        backgroundPosition: 'center',
        backgroundSize:'center',
        paddingTop:'28px',
        height:'650px',
        width:'1400px',
        position:'relative'
    }
    return (
        <div   style={styles}>
            <Navbar />
            <HeroText />
        </div>
    )
}

export default Header
