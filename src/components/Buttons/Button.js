import React from "react";
import PropTypes from "prop-types";
import { Buttons } from "./ButtonStyling";

export const Button = ({ label, link }) => {
  return <Buttons data-testid='primarybutton' primary to={link}>{label}</Buttons>;
};


export const SecondaryButton = ({ label, link }) => {
    return <Buttons data-testid='secondarybutton' to={link}>{label}</Buttons>;
};

export const TetiaryButton = ({ label, link, span }) => {
    return <Buttons data-testid='tetiarybutton' tetiary to={link}>{label}<span>{span}</span></Buttons>;
};

