import dataService from '../services/dataService'

const programReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_PROGRAMS':
    return action.data
  case 'ADD_NEW_PROGRAM':
    state = [...state, action.data]
    return state
  case 'UPDATE_PROGRAM':
    state = [...state, action.data]
    return state
  default:
    return state
  }
}

export const addMoveToProgram = (programId, moves) => {
  return async dispatch => {
    console.log("here")
    const updated = await dataService.addItem('programs', programId, 'moves', moves)
    dispatch({
      type: 'UPDATE_PROGRAM',
      data: updated,
    })
  }
}

export const deleteMoveFromProgram = (programId, moves) => {
  console.log(programId)
  console.log(moves)
  return async (dispatch) => {
    console.log("here")
    const updated = await dataService.updateItem('programs', programId, 'moves', moves)
    console.log(updated)
    dispatch({
      type: 'UPDATE_PROGRAM',
      data: updated,
    })
  }
}

export const updateProgram = (newProgram, id) => {
  return async (dispatch) => {
    const program = newProgram
    const newId = id
    const updatedProgram = await dataService.update('programs', program, newId)
    dispatch({
      data: updatedProgram,
      type: 'UPDATE_PROGRAM'
    })
  }
}


export const createNewProgram = (name, moves) => {
  return async (dispatch) => {
    const newProgram = {
      name,
      moves
    }
    const dispatchableProgram = await dataService.create('programs', newProgram)
    dispatch({
      data: dispatchableProgram,
      type: 'ADD_NEW_PROGRAM'
    })
  }
}

export const initializePrograms = () => {
  return async (dispatch) => {
    const data = await dataService.getAll('programs')
    dispatch({
      data,
      type: 'INITIALIZE_PROGRAMS'
    })
  }
}

export default programReducer