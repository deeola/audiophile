import { useEffect, useState,useContext } from "react";
import audioContext from '../../context/Audiophile/audioContext'

const useForm = (callback, ValidateSign) => {

  const AudioContext = useContext(audioContext)
  const continueAndPay = AudioContext.continueAndPay

  const setIsSubmitted = AudioContext.setIsSubmitted;
  //GENERAL

  
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

  const [error, setError] = useState({});

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

  const handleChange = e => {
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setError(ValidateSign(values));
  //   setIsSubmitting(true);
  //   if (Object.keys(error).length === 0 && isSubmitting) {
  //     continueAndPay()
     
  //   }
    

  // };

  

  // useEffect(() => {
    

  //   //eslint-disable-next-line
  // }, [error]);

      useEffect(
        () => {
        if (Object.keys(error).length === 0 && isSubmitting) {
          if (callback) {
            callback()
          }
          continueAndPay()
        }

        //eslint-disable-next-line
    }, [error]
    );

    const handleSubmit = e => {
        e.preventDefault();

        if (ValidateSign){
          setError(ValidateSign(values));
        }
        setIsSubmitting(true);

    };


  return {
    handleSubmit,
    handleChange,
    values,
    error,
    radioChange,
    radioChangeA,
  };
};

export default useForm;
