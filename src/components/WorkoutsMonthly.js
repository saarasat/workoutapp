import React from 'react'
import { Table } from 'react-bootstrap'


const MonthlyWorkouts = ({ workouts }) => {

  const countTotal = () => {
    const timesOnly = workouts.map(workout => workout.time)
    const hours = timesOnly.map(time => time.split(":"))

    console.log(hours)
    return workouts.reduce((total, currentValue) => total + Number(currentValue.time),0)
  }

  return (
    <div>
      Total {countTotal}
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
        {workouts.map(item =>
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
  

