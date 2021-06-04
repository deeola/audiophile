import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import audioContext from '../../context/Audiophile/audioContext'

function Success(props) {
    
    const AudioContext = useContext(audioContext);
    const removeAllandReturn =AudioContext.removeAllandReturn;
    const successDisplay= AudioContext.successDisplay;
    



    const summaryItems = AudioContext.cartItems;
    const grandTotal = JSON.parse(localStorage.getItem('grandtotal'))


    const summaryothers = summaryItems.length - 1;


    return (
        <div className='SuccessMain' style={successDisplay} >
            <i className="fas fa-check-circle"></i>
            <h2>THANK YOU</h2>
            <h2>FOR YOU ORDER</h2>
            <p className='confirmMail'> You will receive an email confirmation shortly.</p>
            <div className='grandImg'>
                <div className='imgTitle'>
                    <div className='qtyImg'>
                        <div className='imgPrice'>
                            <div className='successImg'>
                            <img src={require('../../assets'+ summaryItems[0].image.desktop).default} alt='simmarydesktop'></img>
                            </div>
                            
                            <div>
                                <p>{summaryItems[0].name}</p>
                                <p>€ {summaryItems[0].price}</p>
                            </div>
                        </div>
                        <div>
                            <p>x{summaryItems[0].qty}</p>
                        </div>
                        
                    </div>
                    <p className='andOthers'> and {summaryothers} other items(s)</p>
                </div>
                <div className='grandTotal'>
                    <p className='successTotalTitle'>GRAND TOTAL</p>
                    <p className='successTotal'>€ {grandTotal.toFixed(2)}</p>
                </div>
            </div>
            <Link onClick={removeAllandReturn} className='successLink' to='/'><button >BACK TO HOME</button></Link>
        </div>
    )
}



export default Success

