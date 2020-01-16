import React from 'react'
import { connect } from 'react-redux'
import { createNewWorkout } from '../reducers/workoutReducer'
import { useStopwatch } from '../hooks/index'
import { Button } from 'react-bootstrap'

const Stopwatch = (props) => {
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

  let minutes = (('0' + Math.floor(time / 60) % 60)).slice(-2)
  let seconds = (('0' + Math.floor(time) % 60)).slice(-2)
  let tensOfSeconds = time.substring(time.length - 1, time.length)

  return (
    <div>
      <div className="container">
        <h1>Duration</h1>
        <h2>{minutes}:{seconds}:{tensOfSeconds}</h2>
        <Button onClick={handleStartPause} variant={timerOn ? "pause" : "save"} className="btn-circle">
          {timerOn ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={resetTimer} variant="change" className="btn-circle">
          Reset
        </Button>
      </div>
    </div>
  )
}

export default connect (null, { createNewWorkout })(Stopwatch)
