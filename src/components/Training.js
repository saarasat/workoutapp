import React from 'react'
import { connect } from 'react-redux'
import { createNewWorkout } from '../reducers/workoutReducer'
import { useStopwatch } from '../hooks/index'
import Headline from './Headline'
import { Button } from 'react-bootstrap'

const Training = (props) => {
  const {
    timerOn,
    time,
    startTimer,
    pauseTimer,
    resetTimer
  } = useStopwatch()

  const handleStartPause = () => {
    timerOn ? pauseTimer() : startTimer()
  }

  const weekdays = new Array(7)
  weekdays[0] = 'Sun'
  weekdays[1] = 'Mon'
  weekdays[2] = 'Tue'
  weekdays[3] = 'Wed'
  weekdays[4] = 'Thu'
  weekdays[5] = 'Fri'
  weekdays[6] = 'Sat'

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const create = async (event) => {
    event.preventDefault()
    const time = time
    const date = new Date()
    const day = weekdays[date.getDay()]
    const month = months[date.getMonth()]
    props.createNewWorkout(time, date, day, month)
  }

  let minutes = (('0' + Math.floor(time / 60) % 60)).slice(-2)
  let seconds = (('0' + Math.floor(time) % 60)).slice(-2)
  let tensOfSeconds = time.substring(time.length - 1, time.length)

  return (
    <div>
      <div className="container">
        <Headline text="Duration"/>
        <h1>{minutes}:{seconds}:{tensOfSeconds}</h1>
        <Button onClick={handleStartPause} variant={timerOn ? "pause" : "save"} className="btn-circle">
          {timerOn ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={resetTimer} variant="change" className="btn-circle">
          Reset
        </Button>
      </div>
      <div className="container">
        <Button variant="save" onClick={create}>Save</Button>
        <br></br>
      </div>
    </div>
  )
}

export default connect (null, { createNewWorkout })(Training)
