import React from 'react';
import Header from '../layouts/Header/Header';
import Main from '../layouts/Bodylayout/Main';
import Footer from '../layouts/footer/Footer'


function Home(props) {

    const {countCartItems, bucketIconClicked,closeIconClicked } = props;
    return (
        <div className='mainDiv'>
            <Header closeIconClicked={closeIconClicked }  countCartItems={countCartItems} bucketIconClicked={bucketIconClicked} /> 
            <Main />
            <Footer />

        </div>
    )
}

export default Home

