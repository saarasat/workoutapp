import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ageReducer from './reducers/ageReducer'
import heightReducer from './reducers/heightReducer'
import timeReducer from './reducers/timeReducer'
import weightReducer from './reducers/weightReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  times: timeReducer,
  weights: weightReducer,
  heights: heightReducer,
  ages: ageReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store