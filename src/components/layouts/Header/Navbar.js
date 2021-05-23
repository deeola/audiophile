import React from "react";
import hamburger from '../../../assets/shared/tablet/hamburger.svg';
import logo from '../../../assets/shared/desktop/logo.svg'
import cart from '../../../assets/shared/desktop/cart.svg'
function Navbar(props) {
  return (
    <nav className='sticky'>
      <div className='logo-ham'>
        <img
          className="hamburger hamtab"
          src={hamburger}
          alt="hamburger"
        ></img>
        <img alt='logo' className='logo' src={logo}></img>
      </div>
      <ul>
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>
      <div>
        <img className='cartIcon' src={cart} alt="carticon"></img>
      </div>
    </nav>
  );
}

export default Navbar;
