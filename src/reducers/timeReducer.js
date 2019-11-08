/* eslint-disable no-case-declarations */

import settingsService from '../services/settingsService'

const byTime = (d1, d2) => d2.date-d1.date


const timeReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_TIMES' || 'ADD_NEW_TIME':
    const data = action.data.map(time => ({ id:time.id, time: time.time, date: new Date(time.date), day: time.day })).sort(byTime)
    const groups = data.reduce((groups, exer) => {
      const date = exer.date.getMonth()
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(exer)
      return groups
    }, {})

    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        times: groups[date]
      }
    })
    return groupArrays.sort(byTime)
  default:
    return state
  }
}

export const createNewTime = (time, date, day) => {
  return async dispatch => {
    const newTime = {
      time,
      date,
      day
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