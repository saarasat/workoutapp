import React from 'react'
import { Table } from 'react-bootstrap'


const MonthlyWorkouts = ({ workouts }) => {

  const countTotalTime = () => {
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

  const countTotalCalories = () => {
    const calories = workouts.map(workout => workout.calories)
    if (calories.length > 0) {
      return calories.reduce((total, value) => {
        if (value !== undefined) return total + value
        return total
    })}
    return 0
  } 
  
  return (
    <div>
      <div className="container">
        <p>Workouts: {workouts.length} Time: {countTotalTime()} Calories: {countTotalCalories()}</p>
        <p></p>
      
      </div>
      <Table>
        <tbody className="result-list">
          {workouts.map(item =>
            <tr key={item.id}>
              <td>{item.sport}</td>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>{item.calories}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default MonthlyWorkouts