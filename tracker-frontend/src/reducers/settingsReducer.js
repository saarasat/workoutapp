import dataService from '../services/dataService'
const byTime = (d1, d2) => d1.date-d2.date


const settingsReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE':
    let data = action.data
    if (data) {
      data = action.data.map(settings => ({id: settings.id, weight: settings.weight, height: settings.height, date: new Date(settings.date)})).sort(byTime)
      return data
    }
    return state
  case 'ADD_NEW_SETTINGS':
    const newSettings = action.data
    newSettings.date = new Date(action.data.date)
    state = [...state, newSettings]
    return state.sort(byTime)
  case 'DELETE_SETTINGS':
    const remainingData = action.data.map(settings => ({id: settings.id, weight: settings.weight, height: settings.height, date: new Date(settings.date)})).byTime()
    return remainingData
  case 'UPDATE_SETTINGS':
    const id = action.data.id
    const updatedSettings = action.data
    updatedSettings.date = new Date(action.data.date)
    return state.map(b => b.id !== id ? b : updatedSettings).sort(byTime)
  default:
    return state
  }
}

export const createNewSettings = (weight, height, date) => {
  return async (dispatch) => {
    const newSettings = {
      weight,
      height,
      date
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

export const updateSettings = (id, newSettings) => {
  
  return async dispatch => {
    const updated = await dataService.update('settings', id, newSettings)
    dispatch({
      type: 'UPDATE_SETTINGS',
      data: updated,
    })
  }
}


export default settingsReducer