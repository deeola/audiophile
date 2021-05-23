import React from "react";
import hamburger from '../../../assets/shared/tablet/hamburger.svg';
import logo from '../../../assets/shared/desktop/logo.svg'
import cart from '../../../assets/shared/desktop/cart.svg'
import { Link } from "react-router-dom";



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
        <Link className='mylink' to='/'>Home</Link>
        <Link  className='mylink' to='/Headphones'>Headphones</Link>
        <Link className='mylink' to='/Speakers'>Speakers</Link>
        <Link className='mylink' to='/Earphones'>Earphones</Link>
      </ul>
      <div>
        <img className='cartIcon' src={cart} alt="carticon"></img>
      </div>
    </nav>
  );
}

export default Navbar;
