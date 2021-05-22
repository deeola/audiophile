import React from 'react';
import Hero from './Hero';

function Header(props) {
    const styles = {
        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/home/desktop/image-hero.jpg')`,
      };

    return (
        <div className='Header' style={styles}>   
            <Hero />
        </div>
    )
}

export default Header

