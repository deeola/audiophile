import React from 'react'
import { List } from './Navbarstyling'
import PropTypes from 'prop-types';

const Links = ({label, to }) => {
  return (
    <List to={to} data-testid={`list-${label}`} >{label}</List>
  )
}
Links.propTypes = {
  primary: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

export default Links