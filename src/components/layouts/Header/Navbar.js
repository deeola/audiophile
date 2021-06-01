import React,{useContext} from "react";
import { Link } from "react-router-dom";
import audioContext from '../../../context/Audiophile/audioContext'



function Navbar(props) {


  
  const AudioContext = useContext(audioContext);
  const Cartlength = AudioContext.cartItems.length;
  const bucketIconClicked = AudioContext.bucketIconClicked;

  
  return (
    <nav className='sticky'>
      <div className='logo-ham'>
        <img alt="hamburger" className="hamburger hamtab" src={require('../../../assets/shared/tablet/hamburger.svg').default} ></img>
        <img alt="logo" className="logo" src={require('../../../assets/shared/desktop/logo.svg').default} alt='logo'></img>
      </div>
      <ul>
        <Link className='mylink' to='/'>Home</Link>
        <Link  className='mylink' to='/Headphones'>Headphones</Link>
        <Link className='mylink' to='/Speakers'>Speakers</Link>
        <Link className='mylink' to='/Earphones'>Earphones</Link>
      </ul>
      <div>
        <button onClick={bucketIconClicked} style={{display:'flex', justifyContent:'spacebetween', alignItems:'center'}} to='/cart'> <img className='cartIcon' src={require('../../../assets/shared/desktop/cart.svg').default} alt="carticon"></img>{''} {Cartlength? (
          <p style={{marginLeft:'10px'}} className='countCart'>{Cartlength}</p>
        ) : ('')}</button>
        
      </div>
    </nav>
  );
}

export default Navbar;
