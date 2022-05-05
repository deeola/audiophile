import React from 'react';
import { Logo } from './Navbarstyling';
import PropTypes from 'prop-types';

const LogoComponent = ({img}) => {
  return (
    <Logo data-testid='logo' src={img} alt={'logo'} />
  )
}

LogoComponent.propTypes = {
  primary: PropTypes.bool,
};


export default LogoComponent

