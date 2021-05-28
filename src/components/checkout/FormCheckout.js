import React from 'react';
import PerosnalDetails from './PersonalDetails';


function FormCheckout(props) {
    const {continueAndPay} = props;
    return (
        <div>
            <PerosnalDetails continueAndPay={continueAndPay} />
        </div>
    )
}


export default FormCheckout


