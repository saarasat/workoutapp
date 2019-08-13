import React from 'react'
import StopWatch from './components/Stopwatch'
import Navigationbar from './components/Navbar'
import TimesList from './components/TimesList'


const App = (props) => {

  const store = props.store

  return (
    <div className="container" align="center">
      <Navigationbar />
      <StopWatch store={store} />
      <TimesList store={store} />
    </div>
  )
}



export default App