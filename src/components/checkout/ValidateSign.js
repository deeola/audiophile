function ValidateSign(values) {
  //FORM VALIDATIONS

  let errors = {};

  //Fetch passwords from local storage

  if (!values.name) {
    errors.name = "Name Required";
  }

  if (!values.number) {
    errors.number = "Phone Number Required";
  }

  if (!values.address) {
    errors.address = "address cannot be empty";
  }

  if (!values.city) {
    errors.city = "City Required";
  }
  if (!values.zip) {
    errors.zip = "zip cannot be empty";
  } else if (values.zip.length > 5) {
    errors.zip = "Not a valid zip code";
  }

  if (!values.country) {
    errors.country = "country cannot be empty";
  }

  // if(!values.moneyPin){
  //     errors.moneyPin= 'E-money pin cannot be empty'
  // }

  // if(!values.moneyNumber){
  //     errors.moneyNumber= 'E-money Number cannot be empty'
  // }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}

export default ValidateSign;
