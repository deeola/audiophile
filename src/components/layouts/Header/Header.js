import React from 'react';
import Hero from './Hero';

function Header(props) {
    // const styles = {
    //     backgroundImage: `url('../assets/home/desktop/image-hero.jpg')`,
    //   };
    const {countCartItems} = props

    return (
        <div className='Header'>   
            <Hero countCartItems={countCartItems} />
        </div>
    )
}

export default Header

