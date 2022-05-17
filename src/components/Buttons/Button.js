import React from "react";
import { Buttons } from "./ButtonStyling";

export const Button = ({ label, link, datatestid }) => {
  return <Buttons data-testid={datatestid}  color= 'primary' hover='primary' to={link}>{label}</Buttons>;
};


export const SecondaryButton = ({ label, link, datatestid }) => {
    return <Buttons data-testid={datatestid} color='secondary' hover='secondary'  to={link}>{label}</Buttons>;
};

export const TetiaryButton = ({ label, link, span, datatestid }) => {
    return <Buttons data-testid={datatestid} color= 'tertiary'  hover='tertiary' to={link}>{label}<span>{span}</span></Buttons>;
};


export const BlackButton = ({ label, link, datatestid }) => {
    return <Buttons data-testid={datatestid}  to={link}>{label}</Buttons>;
};




