import React from 'react';
import { Link } from 'react-router-dom';

function Success(props) {

    const {removeAll} = props;

    const summaryItems = JSON.parse(localStorage.getItem("newItems"));
    const grandTotal = JSON.parse(localStorage.getItem('grandtotal'))


    console.log(summaryItems)

    const summaryothers = summaryItems.length - 1;


    return (
        <div className='SuccessMain'>
            <i class="fas fa-check-circle"></i>
            <h2>THANK YOU</h2>
            <h2>FOR YOU ORDER</h2>
            <p className='confirmMail'> You will receive an email confirmation shortly.</p>
            <div className='grandImg'>
                <div className='imgTitle'>
                    <div className='qtyImg'>
                        <div className='imgPrice'>
                            <div className='successImg'>
                            <img src={require('../../assets'+ summaryItems[0].image.desktop).default}></img>
                            </div>
                            
                            <div>
                                <p>{summaryItems[0].name}</p>
                                <p>€ {summaryItems[0].price}</p>
                            </div>
                        </div>
                        <div>
                            <p>X{summaryItems[0].qty}</p>
                        </div>
                        
                    </div>
                    <p className='andOthers'> and {summaryothers} other items(s)</p>
                </div>
                <div className='grandTotal'>
                    <p className='successTotalTitle'>GRAND TOTAL</p>
                    <p className='successTotal'>€ {grandTotal.toFixed(2)}</p>
                </div>
            </div>
            <Link className='successLink' to='/'><button onClick={removeAll}>BACK TO HOME</button></Link>
        </div>
    )
}



export default Success

