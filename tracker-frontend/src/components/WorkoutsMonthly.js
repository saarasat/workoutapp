import React from 'react'
import { Link }  from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import Calendar from 'react-calendar'
import Icon from './Icon'
import { getIcon } from './Sports'
import { faFireAlt, faMedal, faClock } from '@fortawesome/free-solid-svg-icons'

const MonthlyWorkouts = ({ workouts, totalCalories, totalTime, month }) => {
 
  return (
    <div>
      <div className="calendar-container">
        <Calendar
          showNeighboringMonth={false}
          showNavigation={false}
          value={new Date(2019, 1, 8)}
          tileContent={({ date, view }) => view === 'month' && date.getMonth() === month ? <span>&#11041;</span> : null}
          className="react-calendar">  
        </Calendar>
      </div>
        <div>
          <table className="results-total" > 
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
            <Link key={item.id} to={`/workouts/${item.id}`}>
              <Row className="result-list-row" key={item.id}>
                <Col xs={2} className="result-icon">{getIcon(item.type)}</Col>
                <Col xs={3} className="result-sport">{item.sport}</Col>
                <Col xs={3} className="result-time">{item.day} {item.date.getDate()}.{(item.date.getMonth()+1)}.{item.date.getFullYear()}</Col>
                <Col xs={1} className="result-time">{item.time}</Col>
                <Col xs={3} className="result-calories">{item.calories} kcal</Col>  
              </Row>
            </Link>
          )}
        </div>  
    </div>
  )
}

export default MonthlyWorkouts