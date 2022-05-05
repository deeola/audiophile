import React from 'react'
import { List } from './Navbarstyling'

const Links = ({label, to}) => {
  return (
    <List to={to} data-testid='list'>{label}</List>
  )
}

export default Links