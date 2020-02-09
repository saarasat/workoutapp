
import dataService from '../services/dataService'

const usersReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'ADD_NEW_USER':
    return [...state, action.data]
  case 'DELETE_USER':
    return state.filter(u => u.id !== action.id)
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await dataService.getAllUsers()
    dispatch({
      type: 'INIT_USERS',
      data: users,
    })
  }
}

export const createNewUser = (username, password) => {
  return async (dispatch) => {
    const newUser = {
      username,
      password
    }
    const dispatchableUser = await dataService.createUser(newUser)
    dispatch({
      data: dispatchableUser,
      type: 'ADD_NEW_USER'
    })
  }
}


export const deleteUser = (id) => {
  
  return async dispatch => {
    const users = await dataService.deleteUser(id)
    dispatch({
      type: 'DELETE_USER',
      data: users,
    })
  }
}

export default usersReducer