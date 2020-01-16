import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Accordion, Card } from 'react-bootstrap'
import MonthlyWorkouts from './WorkoutsMonthly'
import { reversedMonths as months } from './Units'

const WorkoutList = ({workouts}) => {
  const [byMonth, setByMonth] = useState('')

  const countTotalTime = (workouts) => {
    const timesOnly = workouts.map(workout => workout.time.split(':'))
    const hours = timesOnly.reduce((total, time) => total + Number(time[0]),0)
    const minutes = timesOnly.reduce((total, time) => total + Number(time[1]),0)
    const totalHours = hours + (Math.floor(minutes / 60))
    let totalMinutes = minutes % 60
    let time = ''
    if (totalHours < 10 && totalMinutes < 10) return time.concat("0",totalHours, ":0",totalMinutes) 
    if (totalHours > 10 && totalMinutes < 10) return time.concat(totalHours,":0",totalMinutes )
    if (totalHours < 10 && totalMinutes > 10) return time.concat("0",totalHours,":",totalMinutes)
    return totalHours + ':' + totalMinutes
  }

  const countTotalCalories = (workouts) => {
    const calories = workouts.map(workout => workout.calories)
    if (calories.length > 0) {
      return calories.reduce((total, value) => {
        if (value !== undefined) return total + value
        return total
    })}
    return 0
  } 

  const filterByMonth = (month) => {
    getMonths()
    return workouts.filter(time => time.month === month)
  }

  const getMonths = () => {
    let monthsy = workouts.map(workout => workout.month);
    let unique = monthsy.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique
  }
   
  return (
    <div className="container">
      <h1>Workouts</h1>
      <div>
        {getMonths().map(month =>
          <Accordion key={month}>
            <Accordion.Toggle 
              className="menu-header" 
              as={Card.Header} 
              eventKey={month} 
              onClick={setByMonth}
            >{month}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={month}>
              <Card.Body>
                {byMonth !== '' ?
                  <MonthlyWorkouts 
                    totalCalories={countTotalCalories(filterByMonth(month))} 
                    totalTime={countTotalTime(filterByMonth(month))} 
                    month={month} 
                    workouts={workouts.filter(time => time.month === month)}/>
                    : ''}
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    workouts: state.workouts
  }
}

export default connect(mapStateToProps)(WorkoutList)