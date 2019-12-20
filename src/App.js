import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Home from './components/Home'
import { Nav, Navbar } from 'react-bootstrap'
import SettingsMenu from './components/SettingsMenu'
import WorkoutList from './components/WorkoutList'
import Workout from './components/Workout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { initializeSettings } from './reducers/settingsReducer'
import { initializeWorkouts } from './reducers/workoutReducer'


export const App = (props) => {

  useEffect(() => {
    props.initializeWorkouts()
    props.initializeSettings()
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
          <Route exact path="/workouts" render={() => <WorkoutList />} />
          <Route exact path="/training" render={() => <Workout />} />
          <Route exact path="/settings" render={() => <SettingsMenu />} />
        </div>
      </Router>
      <div>
        <Navbar className="justify-content-center" fixed="bottom"  variant="dark" bg="dark" >
          <Nav variant="save">
            <Nav.Link href="/training">Training</Nav.Link>
            <Nav.Link href="/workouts">Reports</Nav.Link>
            <Nav.Link href="/settings">Profile</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    
    </div>

  )
}

export default connect(null, { initializeSettings, initializeWorkouts })(App)