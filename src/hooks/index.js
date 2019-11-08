import {  useEffect, useState } from 'react'


export const useTimer = () => {
  const [ timerOn, setTimerOn ] = useState(false)
  const [ time, setTime ] = useState(0)

  useEffect(() => {
    let interval

    if (timerOn) {
      interval = setInterval(
        () => setTime(elapsedTime => elapsedTime + 0.1),
        100
      )
    }
    return () => clearInterval(interval)
  }, [timerOn]
  )

  return {
    timerOn,
    setTimerOn,
    time,
    setTime,
  }
}


export const useStopwatch = () => {
  const { timerOn, setTimerOn, time, setTime } = useTimer()

  const handleReset = () => {
    setTimerOn(false)
    setTime(0)
  }

  return {
    startTimer: () => setTimerOn(true),
    pauseTimer: () => setTimerOn(false),
    resetTimer: () => handleReset(),
    timerOn,
    time: time.toFixed(1),
  }
}

export default { useStopwatch }