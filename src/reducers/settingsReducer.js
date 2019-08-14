

const settingsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_NEW_SETTINGS':
    state = [...state, action.data]
    return state
  default:
    return state
  }
}

export const createNewSettings = ({ weight, height, gender, age }) => {
  return {
    type: 'ADD_NEW_SETTINGS',
    data: {
      weight,
      height,
      gender,
      age
    }
  }
}

export default settingsReducer