import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({icon, color}) => {

  return (
    <FontAwesomeIcon className={`menu-icon ${color}`} icon={icon} />
  )
}

export const ButtonIcon = ({icon, color, onClick}) => {
  return (
    <button className="btn-icon logout" onClick={onClick}>
      <FontAwesomeIcon className={`menu-icon ${color}`} icon={icon} />
    </button>    
  )
}

export default Icon