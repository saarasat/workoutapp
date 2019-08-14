import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import timeStore from './stores/timeStore'
import './index.css'


const store = timeStore

const renderApp = () => {
  ReactDOM.render(<App store={store} />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)