import React from 'react'
import {useStopwatch} from '../hooks/index'

const StopWatch = () => {
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

  return (
  <div>
    <div>
      {time}
    </div>
    <button onClick={handleStartPause} type="button" class="btn btn-success btn-circle btn-xl">
      {timerOn ? "Pause" : "Start"}
    </button>
    <button onClick={resetTimer} type="button" class="btn btn-primary btn-circle btn-xl">
      Reset
    </button>
   </div>
  )

}

export default StopWatch

