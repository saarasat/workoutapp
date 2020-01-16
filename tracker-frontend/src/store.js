import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import workoutReducer from './reducers/workoutReducer'
import settingsReducer from './reducers/settingsReducer'

const reducer = combineReducers({
  workouts: workoutReducer,
  settings: settingsReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store