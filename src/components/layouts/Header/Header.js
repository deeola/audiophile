import React from 'react';
import Hero from './Hero';

function Header(props) {
    // const styles = {
    //     backgroundImage: `url('../assets/home/desktop/image-hero.jpg')`,
    //   };
    const {countCartItems, bucketIconClicked, closeIconClicked } = props

    return (
        <div className='Header'>   
            <Hero closeIconClicked ={closeIconClicked } countCartItems={countCartItems} bucketIconClicked={bucketIconClicked} />
        </div>
    )
}

export default Header

