import {connect} from 'react-redux'
import dataService from '../services/dataService'
import { setNotification } from './notificationReducer'

const usersReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'ADD_NEW_USER':
    if (!action.data) return null
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
    try {
      const newUser = { username, password }
      const dispatchableUser = await dataService.createUser(newUser)
      if (dispatchableUser) {
        dispatch({
          data: dispatchableUser,
          type: 'ADD_NEW_USER'
        })
        dispatch({
          type: 'SET_NOTIFICATION',
          content: {
            message: 'Account created!', 
            type: 'error'
          },
        })
        setTimeout(() => {
          dispatch({
            type: 'CLEAR_NOTIFICATION',
          })
        }, 4000)
      }
    } catch (exception) {
      dispatch({
        type: 'SET_NOTIFICATION',
        content: {
          message: 'username already taken', 
          type: 'error'
        },
      })
      setTimeout(() => {
        dispatch({
          type: 'CLEAR_NOTIFICATION',
        })
      }, 5000)
    }
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

export default connect(null, {setNotification})(usersReducer)