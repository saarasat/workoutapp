import dataService from '../services/dataService'

const programReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_PROGRAMS':
    return action.data.reverse()
  case 'ADD_NEW_PROGRAM':
    state = [...state, action.data]
    return state.reverse()
  case 'REMOVE_MOVES':
    state = state.filter(b => b.id !== action.id)
    return state.reverse()
  case 'UPDATE_PROGRAM':
    const id = action.data.id
    return state.map(b => b.id !== id ? b : action.data)
  default:
    return state.reverse()
  }
}

export const addMoveToProgram = (programId, program) => {
  
  return async dispatch => {
    const updated = await dataService.update('programs', programId, program)
    dispatch({
      type: 'UPDATE_PROGRAM',
      data: updated,
    })
  }
}


export const deleteMoveFromProgram = (programId, program) => {
  return async (dispatch) => {
    const updated = await dataService.update('programs', programId, program)
    dispatch({
      type: 'UPDATE_PROGRAM',
      data: updated,
    })
  }
}

export const createNewProgram = (name, difficulty, moves) => {
  return async (dispatch) => {
    const newProgram = {
      name,
      difficulty,
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