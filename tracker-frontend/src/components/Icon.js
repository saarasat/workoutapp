import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Icon = ({icon}) => {

  return (
    <FontAwesomeIcon className="menu-icon" icon={icon} />
  )
}

export default Icon