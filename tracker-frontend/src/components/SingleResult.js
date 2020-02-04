import React from 'react'
import { getIcon } from './Sports'
import Icon from './Icon'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { faFireAlt, faClock, faMapMarkerAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'


import { deleteWorkout } from '../reducers/workoutReducer'

const SingleResult = ({workout, deleteWorkout}) => {

  const handleDeletion = (id) => {
    deleteWorkout(id)
  }

  return (
    <div className="container">
      {workout ?
        <>    
          <h2>{workout.sport}</h2>
          <Row className="single-result-row">
            <Col>{getIcon(workout.type)}</Col>
            <Col> {workout.type} </Col>
          </Row>
          <Row className="single-result-row">
            <Col><Icon icon={faClock} color="blue"></Icon></Col>
            <Col>{workout.time} </Col>
          </Row>
          <Row className="single-result-row">
            <Col><Icon icon={faFireAlt} color="red"></Icon></Col>
            <Col> {workout.calories} kcal</Col></Row>
          {workout.km !== 0 ?  
          <Row className="single-result-row">
            <Col><Icon icon={faMapMarkerAlt} color="yellow"></Icon></Col>
            <Col>{workout.km} km</Col>
          </Row> : null}
          
          <Link className="logo" to="/training"></Link>
            <button className="btn-icon logout" onClick={() => handleDeletion(workout.id)}>
          <Icon icon={faTrash} color="gray" ></Icon></button>
          <Row>
          <Col xs={6}>
            <Link to="/"><p className="green"> {"<<"} Add a new one </p></Link>
          </Col>
          <Col xs={6}>
            <Link to="/workouts"><p className="green">All reports >></p></Link>
          </Col>        
        </Row>
        </>
      : <>

        <p>Workout deleted</p>
        <Row>
          <Col xs={6}>
            <Link to="/"><p className="green"> {"<<"} Add a new one </p></Link>
          </Col>
          <Col xs={6}>
            <Link to="/workouts"><p className="green">All reports >></p></Link>
          </Col>        
        </Row>
      </>}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const workout = state.workouts.find(workout => workout.id === ownProps.id)
  return {
    workout,
    settings: state.settings,
    workouts: state.workouts
  }
}




export default connect(mapStateToProps, { deleteWorkout })(SingleResult)