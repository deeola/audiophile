import React from 'react'
import Navbar from "../../layouts/Header/Navbar";
import HeroShared from './HeroShared';


function HeaderShared(props) {
    const {countCartItems,bucketIconClicked} = props;
    
    return (
        <div className='HeaderShared'>
            <Navbar bucketIconClicked={bucketIconClicked} countCartItems={countCartItems}/>
            <HeroShared />
            
        </div>
    )
}

export default HeaderShared

