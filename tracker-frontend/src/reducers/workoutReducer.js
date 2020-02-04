/* eslint-disable no-case-declarations */

import dataService from '../services/dataService'

const byTime = (d1, d2) => d2.date-d1.date

const workoutReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_WORKOUTS':
    const data = action.data.map(time => ({ id:time.id, sport: time.sport, type: time.type, calories: time.calories, km: time.km, time: time.time, date: new Date(time.date), day: time.day, month: time.month })).sort(byTime)
    return data
  case 'ADD_NEW_WORKOUT':
    const newWorkout = action.data
    newWorkout.date = new Date(action.data.date)
    return [...state, newWorkout]
  case 'DELETE_WORKOUT':
    const remainingData = action.data.map(time => ({ id:time.id, sport: time.sport, type: time.type, calories: time.calories, km: time.km, time: time.time, date: new Date(time.date), day: time.day, month: time.month })).sort(byTime)
    return remainingData
  default:
    return state
  }
}

export const createNewWorkout = (sport, type, time, calories, km, date, day, month) => {
  return async (dispatch) => {
    const newWorkout = {
      sport,
      type,
      time,
      calories,
      km,
      date,
      day,
      month
    }
    const dispatchableWorkout = await dataService.create('workouts', newWorkout)
    dispatch({
      data: dispatchableWorkout,
      type: 'ADD_NEW_WORKOUT'
    })
  }
}

export const deleteWorkout = (id) => {

  return async (dispatch) => {
    const data = await dataService.delete('workouts', id)
    dispatch({
      data: data,
      type: 'DELETE_WORKOUT'
    })
  }
}

export const initializeWorkouts = () => {
  return async (dispatch) => {
    const data = await dataService.getAll('workouts')
    dispatch({
      data,
      type: 'INITIALIZE_WORKOUTS'
    })
  }
}

export default workoutReducer