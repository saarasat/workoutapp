import dataService from '../services/dataService'

const moveReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_MOVES':
    return action.data
  case 'ADD_NEW_MOVE':
    state = [...state, action.data]
    return state
  default:
    return state
  }
}



export const createNewMove = (name) => {
  return async (dispatch) => {
    const newMove = {
      name
    }
    const dispatchableMove = await dataService.create('moves', newMove)
    dispatch({
      data: dispatchableMove,
      type: 'ADD_NEW_MOVE'
    })
  }
}

export const initializeMoves = () => {
  return async (dispatch) => {
    const data = await dataService.getAll('moves')
    dispatch({
      data,
      type: 'INITIALIZE_MOVES'
    })
  }
}

export default moveReducer