/* eslint-disable no-case-declarations */

import settingsService from '../services/settingsService'

const workoutReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_WORKOUTS':
    return action.data
  case 'ADD_NEW_WORKOUT':
    return [...state, action.data]
  default:
    return state
  }
}

export const createNewWorkout = (sport, time, calories, date, day, month) => {
  return async (dispatch) => {
    const newWorkout = {
      sport,
      time,
      calories,
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