import { useEffect, useState } from "react";

const useSign = (callback, ValidateSign) => {
  //GENERAL

  const [error, setError] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  //SIGN UP
  const [values, setValue] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    moneyPin: "",
    moneyNumber: "",
    country: "",
    style: {
      display: "none",
      width:'100%'
      
    },
    Moneystyle: {
      display: "none",
      width:'100%'
      
    },

  });

  const radioChange = (e) => {
    if (e.target.value === "true") {
      setValue({
        style: {
          display: "block",
          width:'100%'
        },
        Moneystyle: {
          display: "none",
          width:'100%'
          
        }
      });
    }
  };

  const radioChangeA = (e) => {
    if (e.target.value === "false") {
      console.log("hello");
      setValue({
        style: {
          display: "none",
        },
        Moneystyle: {
          display: "block",
          width:'100%'
          
        }

      });
    }
  };

  //handle change event

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue({
      ...values,
      [name]: value,
    });
  };

  //Set to local storage

  const signUpLocal = () => {
    localStorage.setItem("PersonalDetails", JSON.stringify(values));
  };

  //On submit Event

  const onSubmit = (e) => {
    e.preventDefault();
    setError(ValidateSign(values));
    setIsSubmitting(true);

    signUpLocal();
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isSubmitting) {
      callback();
    }

    //eslint-disable-next-line
  }, [error]);

  return {
    handleChange,
    values,
    onSubmit,
    error,
    radioChange,
    radioChangeA,
  };
};

export default useSign;
