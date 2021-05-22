import React from 'react'


function FooterNav(props) {
    return (
        <div className='footerNav'>
          <div className='logo-ham'>
            <img
              className="hamburger hamtab"
              src={"/assets/shared/tablet/icon-hamburger.svg"}
              alt="hamburger"
            ></img>
            <img alt='logo' className='logo' src={"/assets/shared/desktop/logo.svg"}></img>
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

