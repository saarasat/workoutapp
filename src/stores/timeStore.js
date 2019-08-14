
import { createStore, combineReducers } from 'redux'
import timeReducer from '../reducers/timeReducer'
import settingsReducer from '../reducers/settingsReducer'

const reducer = timeReducer

const store = createStore(reducer)

export default store