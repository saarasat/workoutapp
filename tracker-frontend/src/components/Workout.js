import React, { useState } from 'react'
import { connect } from 'react-redux'
import SelectPrepend from './SelectPrepend'
import SimpleSelect from './SimpleSelect'
import CalendarModal from './CalendarModal'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { createNewWorkout } from '../reducers/workoutReducer'
import { createOptions, createMeterOptions, weekdays, months } from './Units'
import { sports, difficultyLevels } from './Sports'
import { withRouter } from 'react-router-dom'


const Workout = (props) => {
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [workoutDate, setWorkoutDate] = useState(new Date())

  const createWorkout = async (event) => {
    event.preventDefault()
    
    //define the sport
    let difficulty = ''
    let sport = ''
    if (props.type === "My programs") {
      sport = event.target.programName.value
      let program = props.programs.find(program => program.name === sport)
      difficulty = program.difficulty
    } 
    else sport = event.target.sport.value

    //define time
    let hours = event.target.hours.value.slice(0,-2)
    let minutes = event.target.minutes.value.slice(0,-3)
    if (hours < 10) hours = "0" + hours     
    if (minutes < 10) minutes = "0" + minutes
    if (minutes === '0') minutes = "00"
    const time = hours + ":" + minutes

    // define distance
    let km = 0
    let meters = 0
    if (props.type === "Walking & running" || props.type === "Cycling") {
      km = event.target.km.value.slice(0,-3)
      meters = event.target.meters.value.slice(0,-2)
    } 
    const total = Number(km + '.' + meters)  

    //define type, calories and date
    const type = props.type
    const calories = countCalories(sport, hours, minutes, difficulty)
    const date = new Date(workoutDate)
    const day = weekdays[workoutDate.getDay()]
    const month = months[workoutDate.getMonth()] + " " + workoutDate.getFullYear()
    
    props.createNewWorkout(sport, type, time, calories, total, date, day, month)
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
            <Col md={6} xs={8} className="date"> {<div className="date" onClick={() => setCalendarVisible(true)}>
              {workoutDate.getDate() + "." + (workoutDate.getMonth()+1) + "." + workoutDate.getFullYear()} 
              </div>}
            </Col>
            <CalendarModal
              visible={calendarVisible}
              hide={() => setCalendarVisible(false)}
              setDate={setWorkoutDate}
            />
          </Row>

          {props.type === "My programs" ?
          <SimpleSelect 
            label="Program"
            control="programName"
            options={props.programs}
          />:
          <SimpleSelect
            label="Sport"
            control="sport"
            options={sportsByType()}
          />}

          <SelectPrepend 
            label="Time"
            firstControl="hours"
            secondControl="minutes"
            firstOptions={createOptions(0,24,'h')}
            secondOptions={createOptions(0,59,'min')}
            secondUnit="min"
          />
          {props.type === "Walking & running" || props.type === "Cycling" ? 
          <SelectPrepend 
            label="Distance"
            firstControl="km"
            secondControl="meters"
            firstOptions={createOptions(0,250,'km')}
            secondOptions={createMeterOptions(1,900,'m')}
            secondUnit="m"
          />
          : null}
          <Button variant="dark"  className="btn-save" type="submit">Save</Button>
        </Form>
        {props.type === "My programs" ?
          <div className="container">
            <Button className="green" variant="dark" onClick={() => props.history.push("/newProgram")}>
              Create a custom program
            </Button> 
          </div>
        : null}
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
