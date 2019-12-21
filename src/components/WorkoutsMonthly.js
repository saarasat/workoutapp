import React from 'react'
import { Table } from 'react-bootstrap'


const MonthlyWorkouts = ({ workouts }) => {

  const countTotal = () => {
    const timesOnly = workouts.map(workout => workout.time.split(':'))
    const hours = timesOnly.reduce((total, time) => total + Number(time[0]),0)
    const minutes = timesOnly.reduce((total, time) => total + Number(time[1]),0)
    const totalTime = hours + (Math.floor(minutes / 60))
    let totalMinutes = minutes % 60
    if (totalMinutes < 10) {
      totalMinutes = '0' + totalMinutes
    }
    return totalTime + ':' + totalMinutes
  }

  return (
    <div>
      <div className="container">
        <p>Workouts: {workouts.length}</p>
        <p>Time: {countTotal(workouts)}</p>
      </div>
      <Table>
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