
import { createStore } from 'redux'
import timeReducer from '../reducers/timeReducer'

const reducer = timeReducer

const store = createStore(reducer)

export default store