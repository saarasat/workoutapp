
import dataService from '../services/dataService'

const usersReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
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

export const deleteUser = (user) => {
  return async dispatch => {
    const users = await dataService.deleteUser('users', user)
    dispatch({
      type: 'DELETE_USER',
      data: users,
    })
  }
}

export default usersReducer