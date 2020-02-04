import loginService from '../services/loginService'
import dataService from '../services/dataService'

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_USER':
    return action.data
  case 'CLEAR_USER':
    return null
  default:
    return state
  }
}

export const initUser = () => {
  return async (dispatch) => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      dispatch({
        type: 'SET_USER',
        data: user
      })
    }  
  }
}

export const handleLogout = () => {
  return async (dispatch) => {
    dataService.destroyToken()
    window.localStorage.clear()
    dispatch({
      type: 'CLEAR_USER'
    })  
  }
}

export const handleLogin = (username, password) => {
  return async (dispatch) => {
    try {
      const user = await loginService.login({
        username, password
      })
  
      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      dataService.setToken(user.token)
      dispatch({
        type: 'SET_USER',
        data: user,
      })
    } catch (exception) {
      setTimeout(() => {}, 5000)
    } 
  }
}


export default loginReducer