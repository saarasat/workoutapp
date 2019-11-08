import settingsService from '../services/settingsService'

const heightReducer = (state = [], action) => {
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

export const createNewHeight = (value, height) => {
  return async dispatch => {
    const newValue = {
      height
    }
    const dispatchableValue = await settingsService.create(value, newValue)
    dispatch({
      height: dispatchableValue,
      type: 'ADD_NEW_VALUE'
    })
  }
}

export const initializeHeights = (value) => {
  return async (dispatch) => {
    const data = await settingsService.getAll(value)
    dispatch({
      data,
      type: 'INITIALIZE'
    })
  }
}

export default heightReducer