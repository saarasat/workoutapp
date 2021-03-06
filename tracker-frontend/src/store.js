import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import workoutReducer from './reducers/workoutReducer'
import settingsReducer from './reducers/settingsReducer'
import programReducer from './reducers/programReducer'
import moveReducer from './reducers/moveReducer'
import loginReducer from './reducers/loginReducer'
import usersReducer from './reducers/usersReducer'
import notificationReducer from './reducers/notificationReducer'


const reducer = combineReducers({
  workouts: workoutReducer,
  settings: settingsReducer,
  programs: programReducer,
  moves: moveReducer,
  user: loginReducer,
  users: usersReducer,
  notification: notificationReducer
})

const store = createStore(reducer, applyMiddleware(thunk))
export default store