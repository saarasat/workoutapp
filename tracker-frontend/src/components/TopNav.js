import React from 'react'
import Icon from './Icon'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'


const TopNav = ({handleLogout}) => {
  return (
    <div className="navbar-top">
      <Row>
        <Col className="logo">
          <Link  to="/">Sporttivartti</Link>
        </Col>
        <Col className="logout">
          <button className="btn-icon logout" onClick={handleLogout}>
          <Icon icon={faSignOutAlt} color="red" ></Icon></button>
        </Col>
      </Row>
    </div>
  )  
}

export default TopNav

