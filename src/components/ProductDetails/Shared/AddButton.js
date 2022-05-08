import React from "react";
import { AddButtonContainer } from "./Sharedstyling";

const AddButton = ({ label, func }) => {
  return <AddButtonContainer onClick={func}>{label}</AddButtonContainer>;
};

export default AddButton;
