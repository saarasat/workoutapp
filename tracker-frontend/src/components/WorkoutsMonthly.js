import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import Calendar from 'react-calendar'
import { getIcon } from './Sports'



const MonthlyWorkouts = ({ workouts, totalCalories, totalTime, month }) => {

  return (
    <div>
      <div>
        <Calendar 
          showNavigation={false}
          tileContent={({ date, view }) => view === 'month' && date.getMonth() === month ? <span>&#11041;</span> : null}
          className="react-calendar">  
        </Calendar>
        <Table className="results-total" >
        </Table>
      </div>
      <div>
        {workouts.map(item =>
          <Row className="result-list-row" key={item.id}>
            <Col xs={2} class-name="result-icon">{getIcon(item.type)}</Col>
            <Col xs={3} className="result-sport">{item.sport}</Col>
            <Col xs={3} className="result-number">{item.day} {item.date.getDate()}.{(item.date.getMonth()+1)}.{item.date.getFullYear()}</Col>
            <Col xs={1} className="result-number">{item.time}</Col>
            <Col xs={3} className="result-calories">{item.calories} kcal</Col>
          </Row>
        )}
      </div>  
    </div>
  )
}

export default MonthlyWorkouts