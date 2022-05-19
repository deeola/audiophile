import React from "react";
import { AddButtonContainer } from "./Sharedstyling";

const AddButton = ({ label, func, datatestid }) => {
  return <AddButtonContainer data-testid={datatestid} onClick={func}>{label}</AddButtonContainer>;
};

export default AddButton;
