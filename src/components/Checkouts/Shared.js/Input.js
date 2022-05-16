import React from "react";
import { FormControl, FormInput, FormLabel, Error } from "./sharedstyling";

const Input = ({
  forlabel,
  label,
  handleChange,
  formtype,
  placeholder,
  name,
  value,
  id,
  error,
  primary
}) => {
  return (
    <FormControl primary={primary}>
      <div>
        <FormLabel htmlFor={forlabel}>{label}</FormLabel>
       {error && <Error> {error}</Error>} 
      </div>
      <FormInput
        onChange={handleChange}
        type={formtype}
        placeholder={placeholder}
        name={name}
        value={value}
        id={id}
      />
    </FormControl>
  );
};

export default Input;
