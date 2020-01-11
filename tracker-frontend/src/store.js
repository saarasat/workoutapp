import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import workoutReducer from './reducers/workoutReducer'
import settingsReducer from './reducers/settingsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  workouts: workoutReducer,
  settings: settingsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store