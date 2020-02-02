import dataService from '../services/dataService'

const programReducer = (state = [], action) => {
  switch (action.type) {
  case 'INITIALIZE_PROGRAMS':
    return action.data
  case 'ADD_NEW_PROGRAM':
    state = [...state, action.data]
    console.log(state)
    return state
  case 'UPDATE_PROGRAM':
    console.log(action.data)
    state = [...state, action.data]
    return state
  default:
    return state
  }
}

export const updateProgram = (newProgram, id) => {
  return async (dispatch) => {
    const program = newProgram
    const newId = id
    console.log(newId)
    console.log(program)
    const updatedProgram = await dataService.update('programs', program, id)
    console.log(updatedProgram)
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