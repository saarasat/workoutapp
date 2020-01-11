import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewWorkout } from '../reducers/workoutReducer'
import Headline from './Headline'
import { weekdays, months } from './TimeUnits'
import { sports } from './Sports'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'


const Workout = (props) => {

  const [minutes, setMinutes] = useState('00')
  const [hours, setHours] = useState('00')


  const create = async (event) => {
    event.preventDefault()
    const sport = event.target.sport.value
    if (hours === 0) setHours('00')
    if (minutes === 0) setMinutes('00')
    const time = hours + ':' + minutes
    const calories = countCalories(sport)
    const date = new Date()
    const day = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    props.createNewWorkout(sport, time, calories, date, day, month)

  }

  const countCalories = (sport) => {
    let latestWeight = props.settings[props.settings.length-1].weight
    let doneActivity = sports.filter(activity => activity.sport === sport)[0]
    let workoutTime = Number(hours) + Number(minutes/60) 
    if (latestWeight < 64.5) {
      return doneActivity["59"] * (latestWeight/59) * workoutTime
    } else if (latestWeight >= 64.5 && latestWeight < 76) {
      return doneActivity["70"] * (latestWeight/70) * workoutTime
    } else if (latestWeight >= 76 && latestWeight < 87.5) {
      return doneActivity["82"] * (latestWeight/82) * workoutTime
    }
    return doneActivity["93"] * (latestWeight/93) * workoutTime
  }

  const handleHourChange = (event) => {
    setHours(event.target.value)
  }

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value)
  }

  const sportsByType = () => sports.filter(sport => sport.type === props.type)
  

  return (
    <div className="container">
      <Headline text="Workout" />
      <div className="container">
        <Form onSubmit={create}>
          <Row>
            <Col><Form.Label>Sport</Form.Label></Col>
            <Col>
              <Form.Control name="sport" as="select">
                {sportsByType().map(item =>
                  <option key={item.id}>{item.sport}</option>
                )}
              </Form.Control>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col><Form.Label>Time</Form.Label></Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                </InputGroup.Prepend>
                <FormControl placeholder="hh" type="number" onChange={handleHourChange}/>  :
                <FormControl placeholder="mm" type="number" onChange={handleMinuteChange}/>
              </InputGroup>
            </Col>
          </Row>
          <div className="container">
            <Button  variant="save" type="submit">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}


export default connect (mapStateToProps, { createNewWorkout })(Workout)
