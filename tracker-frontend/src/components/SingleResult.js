import React from 'react'
import { getIcon } from './Sports'
import Icon from './Icon'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faFireAlt, faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const SingleResult = ({workout}) => {


  return (
    <div className="container">
      <Row className="single-result-row">
        <Col>{getIcon(workout.type)}</Col>
        <Col> {workout.sport} </Col>
      </Row>
      <Row className="single-result-row">
        <Col><Icon icon={faClock} color="blue"></Icon></Col>
        <Col>{workout.time} </Col>
      </Row>
      <Row className="single-result-row">
        <Col><Icon icon={faFireAlt} color="red"></Icon></Col>
        <Col> {workout.calories} kcal</Col></Row>
      {workout.km !== 0 ?  <Row className="single-result-row"><Icon icon={faMapMarkerAlt} color="yellow"></Icon> {workout.km} km</Row> : null}
      <Row className="report-nav" >
        <Link to="/"><p className="green"> {"<<"} Add a another </p></Link>
        <Link to="/workouts"><p className="green">All reports >></p></Link>
      </Row>
    </div>
  )
}

export default SingleResult