import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import timeReducer from './reducers/timeReducer'
import settingsReducer from './reducers/settingsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  times: timeReducer,
  settings: settingsReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store