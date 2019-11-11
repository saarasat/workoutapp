import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { createNewTime } from '../reducers/timeReducer'
import { useStopwatch } from '../hooks/index'
import Headline from './Headline'
import NewMap from './Map'
import { Button } from 'react-bootstrap'
import { GoogleApiWrapper } from 'google-maps-react'

const distanceCalculator = () => {
  const r = 6731
  const lat1 = 60.169857
  const lat2 = 65.012093
  const lon1 = 24.938379
  const lon2 = 25.465076
  const distLat = (lat2-lat1)*Math.PI/180
  const distLon = (lon2-lon1)*Math.PI/180
  const alfa = Math.sin(distLat / 2) * Math.sin(distLat /2)
  + Math.cos(lat1)*Math.cos(lat2)*Math.sin(distLon/2)*Math.sin(distLon/2)
  let c = 2*Math.atan2(Math.sqrt(alfa), Math.sqrt(1-alfa))
  const d = r*c
  return d
} 

const TrainingOutside = (props) => {
  const [distance, setDistance] = useState(0)
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


  const create = async (event) => {
    event.preventDefault()
    const newTime = time
    const date = new Date()
    const day = weekdays[date.getDay()]
    props.createNewTime(newTime, date, day)
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
      <div className="mapContainer">
        <NewMap google={props.google}/>
      </div>
    </div>
  )
}

export default connect (null, { createNewTime })(GoogleApiWrapper({ apiKey: '' })(TrainingOutside))

