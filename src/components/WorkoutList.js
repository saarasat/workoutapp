import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Accordion, Card, Table } from 'react-bootstrap'
import Headline from './Headline'
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
              {byMonth != '' ? 
              <MonthlyWorkouts month={month} workouts={props.workouts.filter(time => time.month == month)}/>
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