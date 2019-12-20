import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createNewTime } from '../reducers/timeReducer'
import Headline from './Headline'
import { Button, Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap'


const Workout = (props) => {

  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)

  const sports = [
    'Walking',
    'Biking',
    'Running'
  ]

  const weekdays = new Array(7)
  weekdays[0] = 'Sun'
  weekdays[1] = 'Mon'
  weekdays[2] = 'Tue'
  weekdays[3] = 'Wed'
  weekdays[4] = 'Thu'
  weekdays[5] = 'Fri'
  weekdays[6] = 'Sat'

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  
  const create = async (event) => {
    event.preventDefault()
    const sport = event.target.sport.value
    const time = hours + ":" + minutes
    const date = new Date()
    const day = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    props.createNewTime(sport, time, date, day, month)

  }

  const createOptions = (start, end) => {
    const array = new Array(end-start)
    for (let i = start; i <= end; i++) {
      array.push(i)
    }
    return array
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
        <Col>
          <Form.Label>Sport</Form.Label>
        </Col>
        <Col >
        <Form.Control name="sport" as="select">
          {sports.map(sport => 
            <option key={sport}>{sport}</option>
          )}
        </Form.Control>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col>
          <Form.Label>Time</Form.Label>
        </Col>
        <Col>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <FormControl defaultValue="00" onChange={handleHourChange}/>  :
          <FormControl defaultValue="00" onChange={handleMinuteChange}/> 
        </InputGroup>
        </Col>
      </Row>
      <Button variant="save" type="submit">
        Save
      </Button>
    </Form>
    </div>
    </div>
  )

}

export default connect (null, { createNewTime })(Workout)
