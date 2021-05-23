import React from 'react';
import footerlogo from '../../../assets/shared/desktop/logo.svg';
// import earphonestab from '../../../assets/home/tablet/earphonestab.jpg';


function FooterNav(props) {
    return (
        <div className='footerNav'>
          <div className='logo-ham'>
            <img
              className="hamburger hamtab"
              src={"/assets/shared/tablet/icon-hamburger.svg"}
              alt="hamburger"
            ></img>
            <img alt='logo' className='logo' src={footerlogo}></img>
          </div>
          <ul>
            <li>Home</li>
            <li>Headphones</li>
            <li>Speakers</li>
            <li>Earphones</li>
          </ul>
        </div>
      );
}



export default FooterNav

