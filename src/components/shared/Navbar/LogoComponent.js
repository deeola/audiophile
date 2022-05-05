import React from 'react';
import { Logo } from './Navbarstyling';

const LogoComponent = ({img, alt}) => {
  return (
    <Logo data-testid='logo' src={img} alt={alt} />
  )
}

export default LogoComponent

