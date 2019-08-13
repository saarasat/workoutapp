import React, { useState, useEffect } from 'react'
import Headline from './components/Headline'
import StopWatch from './components/Stopwatch'
import Navbar from './components/Navbar'
import { setInterval } from 'timers';


const App = (props) => {

  return (
    <div className='name'>
      <Headline text="Sporttivartti"/>
      <StopWatch></StopWatch>
    </div>
  )
}

export default App