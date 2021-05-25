import React from 'react'
import { withRouter } from "react-router-dom";

function HeroShared(props) {
    const path = props.location.pathname.slice(1);
    return (
        <div className='headers'>
            <h1 className='proptitle'>{path}</h1>
        </div>
    )
}


export default withRouter(HeroShared) 

