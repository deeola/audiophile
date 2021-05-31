import React,{useContext} from "react";
import hamburger from '../../../assets/shared/tablet/hamburger.svg';
import logo from '../../../assets/shared/desktop/logo.svg'
import cart from '../../../assets/shared/desktop/cart.svg'
import { Link } from "react-router-dom";
import audioContext from '../../../context/Audiophile/audioContext'



function Navbar(props) {


  
  const AudioContext = useContext(audioContext);
  const Cartlength = AudioContext.cartItems.length;
  const bucketIconClicked = AudioContext.bucketIconClicked;

  
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
        <button onClick={bucketIconClicked} style={{display:'flex', justifyContent:'spacebetween', alignItems:'center'}} to='/cart'> <img className='cartIcon' src={cart} alt="carticon"></img>{''} {Cartlength? (
          <p style={{marginLeft:'10px'}} className='countCart'>{Cartlength}</p>
        ) : ('')}</button>
        
      </div>
    </nav>
  );
}

export default Navbar;
