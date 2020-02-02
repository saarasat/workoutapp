import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import workoutReducer from './reducers/workoutReducer'
import settingsReducer from './reducers/settingsReducer'
import programReducer from './reducers/programReducer'
import moveReducer from './reducers/moveReducer'

const reducer = combineReducers({
  workouts: workoutReducer,
  settings: settingsReducer,
  programs: programReducer,
  moves: moveReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store