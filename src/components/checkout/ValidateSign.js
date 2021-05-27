
function ValidateSign(values) {

    let errors = {}

    //Fetch passwords from local storage

    if(!values.name){
        errors.name = 'name cannot be empty'
    }

    if(!values.number){
        errors.number = 'number cannot be empty'
    }

    if(!values.address){
        errors.address = 'address cannot be empty'
    }

    if(!values.city){
        errors.city= 'city cannot be empty'
    }
    if(!values.zip){
        errors.zip = 'name cannot be empty'
    } else if(values.zip.length > 5){
        errors.zip = 'Not a valid zip code'
    }

    if(!values.country){
        errors.country= 'country cannot be empty'
    }





    if(!values.moneyPin){
        errors.moneyPin= 'E-money pin cannot be empty'
    }

    if(!values.moneyNumber){
        errors.moneyNumber= 'E-money Number cannot be empty'
    }

    if(!values.email){
        errors.email = 'email cannot be empty'
    }


    if(!values.password2){
        errors.password2= 'pasword cannot be empty'
    } else if (values.password2 !== values.password){
        errors.password2 = 'password does not match'

    }

    return errors;



}


export default ValidateSign;

