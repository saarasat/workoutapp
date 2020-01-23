import dataService from '../services/dataService'

const settingsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE':
    return action.data
  case 'ADD_NEW_SETTINGS':
    state = [...state, action.data]
    return state
  default:
    return state
  }
}
export const createNewSettings = (age, weight, height) => {
  return async (dispatch) => {
    const newSettings = {
      age,
      weight,
      height
    }
    const dispatchableSettings = await dataService.create('settings', newSettings)
    dispatch({
      data: dispatchableSettings,
      type: 'ADD_NEW_SETTINGS'
    })
  }
}

export const initializeSettings = () => {
  return async (dispatch) => {
    const data = await dataService.getAll('settings')
    dispatch({
      data,
      type: 'INITIALIZE'
    })
  }
}

export default settingsReducer