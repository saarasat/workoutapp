import React, { useState } from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'
import { Button, Col, Form, InputGroup, Row, Modal, ModalBody } from 'react-bootstrap'
import { createNewWorkout } from '../reducers/workoutReducer'
import { createOptions, weekdays, months } from './Units'
import { sports, difficultyLevels } from './Sports'
import { withRouter } from 'react-router-dom'

const Workout = (props) => {
  const [visible, setVisible] = useState(false)
  const [workoutDate, setWorkoutDate] = useState(new Date())

  const changeDay = (date) => {
    setWorkoutDate(date)
  } 

  const showDay = () => {
    setVisible(false)
  }
 
  const createWorkout = async (event) => {
    event.preventDefault()    
    if (workoutDate === '') return

    const sport = event.target.sport.value
    let hours = event.target.hours.value
    let minutes = event.target.minutes.value
    let difficulty = ''
    if (props.type === "My programs") {
      let program = props.programs.find(program => program.name === sport)
      difficulty = program.difficulty
    }
    if (hours < 10) hours = "0" + hours     
    if (minutes < 10) minutes = "0" + minutes
    let km = 0
    if (props.type === "Walking & running" || props.type === "Cycling") km = Number(event.target.km.value)
  
    const time = hours + ":" + minutes
    const calories = countCalories(sport, hours, minutes, difficulty)
    const date = new Date(workoutDate)
    const type = props.type
    const day = weekdays[workoutDate.getDay()]
    const month = months[workoutDate.getMonth()] + " " + workoutDate.getFullYear()
    props.createNewWorkout(sport, type, time, calories, km, date, day, month)
    props.history.push(`/workouts`)
  }

  const countCalories = (sport, hours, minutes, difficulty) => {
    let latestWeight = 0
    if (props.settings.length !== 0) {
      latestWeight = props.settings[props.settings.length-1].weight
    } 
    let doneActivity = ''
    if (props.type === "My programs") doneActivity = difficultyLevels.find(d => d.level === difficulty) 
    else doneActivity = sports.filter(activity => activity.sport === sport)[0]
    
    let workoutTime = Number(hours) + Number(minutes/60) 

    if (latestWeight < 64.5) return Math.round(doneActivity["59"] * (latestWeight/59) * workoutTime)
    else if (latestWeight >= 64.5 && latestWeight < 76) return Math.round(doneActivity["70"] * (latestWeight/70) * workoutTime)
    else if (latestWeight >= 76 && latestWeight < 87.5) return Math.round(doneActivity["82"] * (latestWeight/82) * workoutTime)
    return Math.round(doneActivity["93"] * (latestWeight/93) * workoutTime)
  }

  const sportsByType = () => sports.filter(sport => sport.type === props.type)
  

  return (
    <div className="container">
     
      <h1>Workout</h1>
      <div className="container">
        <Form onSubmit={createWorkout}>
          <Row className="form-row">
            <Col md={6} xs={4}><Form.Label>Date</Form.Label></Col>
            <Col md={6} xs={8} className="date"> {<div className="date" onClick={() => setVisible(true)}>
              {workoutDate.getDate() + "." + (workoutDate.getMonth()+1) + "." + workoutDate.getFullYear()} 
              </div>}
            </Col>
            <Modal show={visible} onHide={() => setVisible(false)}> 
              <ModalBody>
                <div>
                  <Calendar onClickDay={(returnValue, event) =>  changeDay(returnValue)} />
                </div>
              </ModalBody>              
              <Modal.Footer className="justify-content-center">
                <Button onClick={() => setVisible(false)} variant="secondary">Cancel</Button>
                <Button variant="dark" onClick={() => showDay()} variant="save"> Ok</Button>
              </Modal.Footer>
            </Modal>
          </Row>

          {props.type === "My programs" ?
          <Row className="form-row">
            <Col md={6} xs={4}><Form.Label>Program</Form.Label></Col>
            <Col md={6} xs={8}>
              <Form.Control name="sport" as="select" className="select-dark">
                {props.programs.map(item => <option key={item.id}>{item.name}</option>)}
              </Form.Control>
            </Col>
          </Row>
          :
          <Row className="form-row">
            <Col md={6} xs={4}><Form.Label>Sport</Form.Label></Col>
            <Col md={6} xs={8}>
              <Form.Control name="sport" as="select" className="select-dark">
                {sportsByType().map(item => <option key={item.id}>{item.sport}</option>)}
              </Form.Control>
            </Col>
          </Row>
          }
          <Row className="form-row">
            <Col md={6} xs={4}><Form.Label>Time</Form.Label></Col>
            <Col md={6} xs={8}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <Form.Control name="hours" as="select">
                {createOptions(0,24).map(item =>
                  <option key={item}>{item}</option>
                )}
                </Form.Control> : 
                <Form.Control name="minutes" as="select">
                {createOptions(0,59).map(item =>
                  <option key={item}>{item}</option>
                )}
                </Form.Control>
              </InputGroup>
            </Col>
          </Row>
          {props.type === "Walking & running" || props.type === "Cycling" ?
          <Row className="form-row">
            <Col md={6} xs={4}><Form.Label>Km</Form.Label></Col>
            <Col md={6} xs={8}>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <Form.Control name="km" as="select">
                {createOptions(0,250).map(item =>
                  <option key={item}>{item}</option>
                )}
                </Form.Control> : 
                <Form.Control name="meters" as="select">
                {createOptions(0,1).map(item =>
                  <option key={item}>{item}</option>
                )}
                </Form.Control>
              </InputGroup>
            </Col>
            </Row> : ""}
          <Button variant="dark"  className="btn-save" type="submit">Save</Button>
        </Form>
        
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings,
    workouts: state.workouts,
    programs: state.programs,
  }
}


export default withRouter(connect(mapStateToProps, { createNewWorkout })(Workout))
