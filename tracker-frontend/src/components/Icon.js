import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = ({icon, color}) => {

  return (
    <FontAwesomeIcon className={`menu-icon ${color}`} icon={icon} />
  )
}

export default Icon