import React from 'react';
import Earphones from './Earphones';
import Gear from './Gear';
import Shop from './Shop';
import Speaker from './Speaker';
import Zspeaker from './Zspeaker';


function Body(props) {
    return (
        <div>
            <Shop />
            <Speaker/>
            <Zspeaker />
            <Earphones />
            <Gear />
            
            
        </div>
    )
}

export default Body

