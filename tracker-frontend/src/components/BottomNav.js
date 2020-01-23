import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { faRunning, faArchive, faStopwatch, faUser } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'


const BottomNav = () => {
  return (
    <div className="navbar">
    <Link to="/">
      <Col>
        <Row className="nav-row green"><Icon icon={faRunning}></Icon></Row>
        <Row className="nav-row">Training</Row>
      </Col>
    </Link>
    <Link to="/stopwatch">
    <Col>
        <Row className="nav-row green"><Icon icon={faStopwatch}></Icon></Row>
        <Row className="nav-row">Stopwatch</Row>
      </Col>            
    </Link>
    <Link to="/workouts">
    <Col>
        <Row className="nav-row green"><Icon icon={faArchive}></Icon></Row>
        <Row className="nav-row">Reports</Row>
      </Col>
      </Link>
    <Link to="/settings">
    <Col>
        <Row className="nav-row green"><Icon icon={faUser}></Icon></Row>
        <Row className="nav-row">Profile</Row>
      </Col>
    </Link>
  </div>
  )
}

export default BottomNav