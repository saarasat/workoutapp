/* eslint-disable no-case-declarations */

import settingsService from '../services/settingsService'

const byTime = (d1, d2) => d2.date-d1.date


const timeReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_TIMES' || 'ADD_NEW_TIME':
    const data = action.data.map(time => ({ id:time.id, sport: time.sport, time: time.time, date: new Date(time.date), day: time.day, month: time.month })).sort(byTime)
    return data
  default:
    return state
  }
}

export const createNewTime = (sport, time, date, day, month) => {
  return async (dispatch) => {
    const newTime = {
      sport,
      time,
      date,
      day,
      month
    }
    const dispatchableTime = await settingsService.create('times', newTime)
    dispatch({
      data: dispatchableTime,
      type: 'ADD_NEW_TIME'
    })
  }
}

export const initializeTimes = () => {
  return async (dispatch) => {
    const data = await settingsService.getAll('times')
    dispatch({
      data,
      type: 'INITIALIZE_TIMES'
    })
  }
}

export default timeReducer