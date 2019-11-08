import settingsService from '../services/settingsService'

const ageReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE':
    return action.data
  case 'ADD_NEW_VALUE':
    state = [...state, action.data]
    return state
  default:
    return state
  }
}

export const createNewAge = (value, age) => {
  return async dispatch => {
    const newValue = {
      age
    }
    const dispatchableValue = await settingsService.create(value, newValue)
    dispatch({
      age: dispatchableValue,
      type: 'ADD_NEW_VALUE'
    })
  }
}

export const initializeAges = (value) => {
  return async (dispatch) => {
    const data = await settingsService.getAll(value)
    dispatch({
      data,
      type: 'INITIALIZE'
    })
  }
}

export default ageReducer