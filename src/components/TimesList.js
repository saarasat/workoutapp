import React from 'react'
import { connect } from 'react-redux'
import { Accordion, Card, Table } from 'react-bootstrap'
import Headline from './Headline'
import Total from './Total'

const TimesList = (props) => {

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <div>
      <Headline text="Reports"></Headline>
      <div>
        {props.times.map(exercise =>
          <Accordion defaultActiveKey={!exercise.date} key={exercise.date}>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey={exercise.date}>
              {months[(exercise.date)]}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={exercise.date}>
              <Card.Body >
                <Total array={exercise.times} time="Time: " measurement="s"></Total>
                <Table>
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Date</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody className="result-list">
                    {exercise.times.map(item =>
                      <tr key={item.id}>
                        <td>{item.day}</td>
                        <td>{item.date.getDate() + '.' + (item.date.getMonth()+1) + '.' + item.date.getFullYear()}</td> 
                        <td>{item.time} s</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
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

export default connect(mapStateToProps)(TimesList)