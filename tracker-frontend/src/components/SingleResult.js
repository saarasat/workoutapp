import React from 'react'
import { getIcon } from './Sports'

const SingleResult = ({workout}) => {



  return (
    <div className="container">
      <h4>{getIcon(workout)}{workout.sport}</h4>
      <h4>Duration: {workout.time} </h4>
      <h4>Calories: {workout.calories} </h4>

    </div>
  )
}

export default SingleResult