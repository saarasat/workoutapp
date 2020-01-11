import settingsService from '../services/settingsService'

const settingsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE':
    return action.data
  case 'ADD_NEW_SETTINGS':
    console.log(state)
    state = [...state, action.data]
    console.log(state)
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
    const dispatchableSettings = await settingsService.create('settings', newSettings)
    dispatch({
      data: dispatchableSettings,
      type: 'ADD_NEW_SETTINGS'
    })
  }
}

export const initializeSettings = () => {
  return async (dispatch) => {
    const data = await settingsService.getAll('settings')
    dispatch({
      data,
      type: 'INITIALIZE'
    })
  }
}

export default settingsReducer