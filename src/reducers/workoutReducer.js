/* eslint-disable no-case-declarations */

import settingsService from '../services/settingsService'

const byDate = (d1, d2) => d2.date-d1.date


const workoutReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_WORKOUTS' || 'ADD_NEW_WORKOUT':
    const data = action.data.map(workout => ({ id:workout.id, sport: workout.sport, time: workout.time, date: new Date(workout.date), day: workout.day, month: workout.month })).sort(byDate)
    return data
  default:
    return state
  }
}

export const createNewWorkout = (sport, time, date, day, month) => {
  return async (dispatch) => {
    const newWorkout = {
      sport,
      time,
      date,
      day,
      month
    }
    const dispatchableWorkout = await settingsService.create('workouts', newWorkout)
    dispatch({
      data: dispatchableWorkout,
      type: 'ADD_NEW_WORKOUT'
    })
  }
}

export const initializeWorkouts = () => {
  return async (dispatch) => {
    const data = await settingsService.getAll('workouts')
    dispatch({
      data,
      type: 'INITIALIZE_WORKOUTS'
    })
  }
}

export default workoutReducer