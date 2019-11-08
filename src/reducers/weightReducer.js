import settingsService from '../services/settingsService'

const weightReducer = (state = [], action) => {
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

export const createNewWeight = (value, weight) => {
  return async dispatch => {
    const newValue = {
      weight
    }
    const dispatchableValue = await settingsService.create(value, newValue)
    dispatch({
      weight: dispatchableValue,
      type: 'ADD_NEW_VALUE'
    })
  }
}

export const initializeWeights = (value) => {
  return async (dispatch) => {
    const data = await settingsService.getAll(value)
    dispatch({
      data,
      type: 'INITIALIZE'
    })
  }
}

export default weightReducer