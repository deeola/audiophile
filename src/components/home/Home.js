import React from 'react';
import Header from '../layouts/Header/Header';
import Main from '../layouts/Bodylayout/Main';
import Footer from '../layouts/footer/Footer'


function Home(props) {

    const {countCartItems} = props;
    return (
        <div className='mainDiv'>
            <Header countCartItems={countCartItems} /> 
            <Main />
            <Footer />

        </div>
    )
}

export default Home

