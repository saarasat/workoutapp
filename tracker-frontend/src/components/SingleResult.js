import React, {useState, useEffect} from 'react'
import { getIcon } from './Sports'
import Icon from './Icon'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { faFireAlt, faClock, faMapMarkerAlt, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'


import { deleteWorkout } from '../reducers/workoutReducer'

const SingleResult = ({id, workouts, deleteWorkout}) => {
  const [workout, setWorkout] = useState('')
  const [goTo, setGoTo] = useState(false)

  useEffect(() => {
    setWorkout(workouts.find(workout => workout.id === id))   
  })

  const handleDeletion = (id) => {
    deleteWorkout(id)

  }


  return (
    <div className="container">
      <h1>Single result</h1>
      {workouts.length > 0 && workout !== undefined ?
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
          {workout.km !== 0 ?  
          <Row className="single-result-row">
            <Col><Icon icon={faMapMarkerAlt} color="yellow"></Icon></Col>
            <Col>{workout.km} km</Col>
          </Row> : null}
          <Row className="report-nav" >
            <Link to="/"><p className="green"> {"<<"} Add a another </p></Link>
            <Link to="/workouts"><p className="green">All reports >></p></Link>
          </Row>
          <Link className="logo" to="/training"></Link>
            <button className="btn-icon logout" onClick={() => handleDeletion(id)}>
          <Icon icon={faTrash} color="gray" ></Icon></button>
        </div>
      : <div>
        <p>Workout deleted</p>
        <Row className="report-nav" >
            <Link to="/"><p className="green"> {"<<"} Add a new one </p></Link>
            <Link to="/workouts"><p className="green">All reports >></p></Link>
          </Row>
        </div>}
   
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    workouts: state.workouts
  }
}




export default connect(mapStateToProps, { deleteWorkout })(SingleResult)