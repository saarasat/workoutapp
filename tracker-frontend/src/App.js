import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Home from './components/Home'
import SettingsMenu from './components/SettingsMenu'
import WorkoutList from './components/WorkoutList'
import Workout from './components/Workout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
        <div className="navbar-top">
          <Link to="/">Sporttivartti</Link>
        </div>
        <div className="body">
          <Route exact path="/" component={Home}>
          </Route> 
          <Route exact path="/workouts" render={() => <WorkoutList />} />
          <Route exact path="/training/:type" render={({match}) => <Workout type={(match.params.type)}/>} />
          <Route exact path="/settings" render={() => <SettingsMenu />} />
        </div>
        <div className="navbar">
          <Link to="/">Training</Link>
          <Link to="/workouts">Reports</Link>
          <Link to="/settings">Profile</Link>
        </div>
      </Router>
    </div>
  )
}

export default connect(null, { initializeSettings, initializeWorkouts })(App)