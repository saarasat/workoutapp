import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Accordion, Card, Table } from 'react-bootstrap'
import Headline from './Headline'
import Total from './Total'
import MonthlyWorkouts from './WorkoutsMonthly'

const WorkoutList = (props) => {
  const [byMonth, setByMonth] = useState('')

  const months = [
    'December',
    'November',
    'October',
    'September',
    'August',
    'July',
    'June',
    'May',
    'April',
    'March',
    'February',
    'January'
  ]

  return (
    <div>
      <Headline text="Reports"></Headline>
      <div>
        {months.map(month =>
          <Accordion key={month}>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={month} onClick={setByMonth}>
              {month}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={month}>
              <Card.Body>
              <Total></Total>
              {byMonth != '' ? 
              <MonthlyWorkouts 
              month={month} 
              times={props.times.filter(time => time.month == month)}
              ></MonthlyWorkouts> 
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
    times: state.times
  }
}




export default connect(mapStateToProps)(WorkoutList)