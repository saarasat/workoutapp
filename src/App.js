import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Home from './components/Home'
import TrainingOutside from './components/TrainingOutside'
import { Nav, Navbar } from 'react-bootstrap'
import SettingsMenu from './components/SettingsMenu'
import TimesList from './components/TimesList'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { initializeWeights } from './reducers/weightReducer'
import { initializeHeights } from './reducers/heightReducer'
import { initializeAges } from './reducers/ageReducer'
import { initializeTimes } from './reducers/timeReducer'


export const MapContainer = (props) => {

  useEffect(() => {
    props.initializeTimes()
    props.initializeWeights('weights')
    props.initializeHeights('heights')
    props.initializeAges('ages')
  })


  return (
    <div className="app">

      <Router>
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Sporttivartti</Navbar.Brand>
          </Navbar>
        </div>
        <div className="container" align="center">
          <Route exact path="/" render={() => <Home />}/>
          <Route exact path="/times" render={() => <TimesList />} />
          <Route exact path="/training" render={() => <TrainingOutside />} />
          <Route exact path="/settings" render={() => <SettingsMenu />} />
        </div>
      </Router>
      <div>
        <Navbar className="justify-content-center" fixed="bottom"  variant="dark" bg="dark" >
          <Nav variant="save">
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/times">Reports</Nav.Link>
            <Nav.Link href="/settings">Profile</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </div>

  )
}

export default connect(null, { initializeAges, initializeHeights, initializeWeights, initializeTimes })(MapContainer)