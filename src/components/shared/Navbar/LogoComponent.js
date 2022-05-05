import React from 'react';
import { Logo } from './Navbarstyling';

const LogoComponent = ({img}) => {
  return (
    <Logo data-testid='logo' src={img} alt={'logo'} />
  )
}

export default LogoComponent

