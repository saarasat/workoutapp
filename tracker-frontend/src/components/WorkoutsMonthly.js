import React, { useState, useEffect } from 'react'
import { Link }  from 'react-router-dom'
import { Row,  Col } from 'react-bootstrap'
import Icon from './Icon'
import { getIcon } from './Sports'
import { faFireAlt, faMedal, faClock, faTrophy } from '@fortawesome/free-solid-svg-icons'
import WorkoutGraph from './WorkoutGraph'
import { get } from 'mongoose'

const MonthlyWorkouts = ({ workouts, totalCalories, totalTime, month }) => {
  const [bestId, setBestId] = useState(0)
  const [data, setData] = useState([])

  const getBest = () => {
    let best = 0
    workouts.forEach(workout => {

      if (Number(workout.calories) > best) {
        best = workout.calories
        setBestId(workout.id)
      }
    })
  }

  
  
  useEffect(() => {
    getBest()
    workouts.map(workout => workout.week = getWeek(workout))
    console.log(countWeeklyTotals())
    setData(countWeeklyTotals)
  },[])  

  const countTotalTime = (weeklyWorkouts) => {
    const timesOnly = weeklyWorkouts.map(workout => workout.time.split(':'))
    const hours = timesOnly.reduce((total, time) => total + Number(time[0]),0)
    const minutes = timesOnly.reduce((total, time) => total + Number(time[1]),0)
    const totalHours = Math.round((hours + (minutes / 60)))
    return totalHours
  }

  const countWeeklyTotals = () => {
    let group = workouts.reduce((total, workout) => {
      total[workout.week] = [...total[workout.week] || [], workout];
      return total;
     }, {});
  
    const weeks = Object.values(group)
    let i = 1
    const times = weeks.map(item => ({ x: item[0].week, y:countTotalTime(item)}))
    console.log(times)
    console.log(weeks)
    return times
  }

  const getWeek = (workout) => {
    var date = new Date(workout.date);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
    - 3 + (week1.getDay() + 6) % 7) / 7);
  }


  
 


  return (
    <div>
      <WorkoutGraph key={month} data={data}/>
        <div>
          <table className="results-total"> 
            <tbody>
              <tr>
                <td><Icon icon={faMedal} color="green"></Icon></td> 
                <td><Icon icon={faClock} color="blue"></Icon></td>
                <td><Icon icon={faFireAlt} color="red"></Icon></td>  
              </tr>
              <tr>
                <td className="results-total-column">{workouts.length}</td> 
                <td className="results-total-column">{totalTime}</td>
                <td className="results-total-column">{totalCalories}</td>  
              </tr>
              <tr>
                <td>Workouts</td> 
                <td>Time</td>
                <td>Calories</td>  
              </tr>
            </tbody>
          </table>
        </div>
            
        <div>
          {workouts.map(item => 
            <>
            {bestId === item.id ? 
            <Link key={item.id} to={`/workouts/${item.id}`}>
              <Row className="result-list-row" key={item.id}>
                <Col xs={2} className="result-icon"><Icon icon={faTrophy} color="orange"></Icon><p className="p-months-best">Month's Best</p></Col>
                <Col xs={3} className="result-sport">{item.sport}</Col>
                <Col xs={3} className="result-time"><b>{item.day} {item.date.getDate()}.{(item.date.getMonth()+1)}.{item.date.getFullYear()}</b></Col>
                <Col xs={1} className="result-time"><b>{item.time}</b></Col>
                <Col xs={3} className="result-calories"><b>{item.calories} kcal</b></Col>
              </Row>
            </Link>
            : <Link key={item.id} to={`/workouts/${item.id}`}>
            <Row className="result-list-row" key={item.id}>
              <Col xs={2} className="result-icon">{getIcon(item.type)}</Col>
              <Col xs={3} className="result-sport">{item.sport}</Col>
              <Col xs={3} className="result-time">{item.day} {item.date.getDate()}.{(item.date.getMonth()+1)}.{item.date.getFullYear()}</Col>
              <Col xs={1} className="result-time">{item.time}</Col>
              <Col xs={3} className="result-calories">
                <p className="result-calories-value orange">{item.calories} kcal</p>
                {item.km ? <p className="result-km-value blue">{item.km} km</p> : null}
              </Col>        
            </Row>
          </Link>}
          </>
          )}
        </div> 
    </div>
  )
}

export default MonthlyWorkouts