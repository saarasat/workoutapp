import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewWorkout } from '../reducers/workoutReducer'
import Headline from './Headline'
import { weekdays, months } from './TimeUnits'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'


const Workout = (props) => {

  const [minutes, setMinutes] = useState('00')
  const [hours, setHours] = useState('00')

  const sports = [
    'Walking',
    'Biking',
    'Running'
  ]

  const create = async (event) => {
    event.preventDefault()
    const sport = event.target.sport.value
    if (hours === 0) setHours('00')
    if (minutes === 0) setMinutes('00')
    const time = hours + ':' + minutes
    const date = new Date()
    const day = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    props.createNewWorkout(sport, time, date, day, month)

  }

  const handleHourChange = (event) => {
    setHours(event.target.value)
  }

  const handleMinuteChange = (event) => {
    setMinutes(event.target.value)
  }


  return (
    <div className="container">
      <Headline text="Workout" />
      <div className="container">
        <Form onSubmit={create}>
          <Row>
            <Col><Form.Label>Sport</Form.Label></Col>
            <Col>
              <Form.Control name="sport" as="select">
                {sports.map(sport =>
                  <option key={sport}>{sport}</option>
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
            <Button href="/workouts" variant="save" type="submit">Save</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default connect (null, { createNewWorkout })(Workout)
