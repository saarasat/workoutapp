import React from 'react'
import { useStopwatch } from '../hooks/index'
import Headline from './Headline'
import { createNewTime } from '../reducers/timeReducer'

const StopWatch = ({ store }) => {
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

  const create = (event) => {
    event.preventDefault()
    const newTime = time
    const date = new Date()
    const times = date.getDate() +"." + (date.getMonth()+1) + "." + date.getFullYear()
    store.dispatch(
      createNewTime(newTime, times)
    )
  }

  let minutes = (('0' + Math.floor(time / 60) % 60)).slice(-2)
  let seconds = (('0' + Math.floor(time) % 60)).slice(-2)
  let tensOfSeconds = time.substring(time.length - 1, time.length)

  return (
    <div className="container">
      <Headline text="Duration"/>
      <h1>{minutes}:{seconds}:{tensOfSeconds}</h1>
      <button onClick={handleStartPause} type="button" className="btn btn-success btn-circle btn-xl">
        {timerOn ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} type="button" className="btn btn-primary btn-circle btn-xl">
        Reset
      </button>
      <button onClick={create}>save</button>
    </div>
  )
}

export default StopWatch

