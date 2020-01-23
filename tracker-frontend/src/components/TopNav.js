import React from 'react'
import Icon from './Icon'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const TopNav = ({handleLogout}) => {
  return (
    <div className="navbar-top">
      <Link className="logo" to="/">Sporttivartti</Link>
      <button className="btn-icon logout" onClick={handleLogout}>
      <Icon icon={faSignOutAlt} color="red" ></Icon></button>
    </div>
  )  
}

export default TopNav

