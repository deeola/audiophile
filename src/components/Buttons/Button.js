import React from "react";
import { Buttons } from "./ButtonStyling";

export const Button = ({ label, link }) => {
  return <Buttons data-testid='primarybutton' color= 'primary' hover='primary' to={link}>{label}</Buttons>;
};


export const SecondaryButton = ({ label, link }) => {
    return <Buttons data-testid='secondarybutton' color='secondary' hover='secondary'  to={link}>{label}</Buttons>;
};

export const TetiaryButton = ({ label, link, span }) => {
    return <Buttons data-testid='tetiarybutton'  color= 'tertiary'  hover='tertiary' to={link}>{label}<span>{span}</span></Buttons>;
};


export const BlackButton = ({ label, link }) => {
    return <Buttons data-testid='bgcolorblackbutton'  to={link}>{label}</Buttons>;
};




