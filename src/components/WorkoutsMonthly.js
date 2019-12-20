import React from 'react'
import { Table } from 'react-bootstrap'


const MonthlyWorkouts = (props) => {

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Sport</th>
            <th>Day</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="result-list">
        {props.times.map(item =>
          <tr key={item.id}>
            <td>{item.sport}</td>
            <td>{item.day}</td>
            <td>{item.date.getDate() + '.' + (item.date.getMonth()+1) + '.' + item.date.getFullYear()}</td>
            <td>{item.time}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default MonthlyWorkouts
  

