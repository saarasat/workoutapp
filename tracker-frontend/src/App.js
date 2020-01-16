import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Home from './components/Home'
import Profile from './components/Profile'
import Stopwatch from './components/Stopwatch'
import WorkoutList from './components/WorkoutList'
import Workout from './components/Workout'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { initializeSettings } from './reducers/settingsReducer'
import { initializeWorkouts } from './reducers/workoutReducer'



export const App = (props) => {


  useEffect(() => {
    props.initializeWorkouts()
  })

  useEffect(() => {
    props.initializeSettings()
  })

  return (
    <Router>
      <div>    
        <div className="navbar-top">
          <Link to="/">Sporttivartti</Link>
        </div>
        <div className="body">
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/stopwatch" render={()=> <Stopwatch></Stopwatch>} />
          <Route exact path="/workouts" render={() => <WorkoutList />} />
          <Route exact path="/training/:type" render={({match}) => <Workout type={(match.params.type)}/>} />
          <Route exact path="/settings" render={() => <Profile />} />

        </div>
        <div className="navbar">
          <Link to="/">
            <Col>
              <Row className="nav-row"><i className="fas fa-running"></i></Row>
              <Row className="nav-row">Training</Row>
            </Col>
          </Link>
          <Link to="/stopwatch">
          <Col>
              <Row className="nav-row"><i className="fas fa-stopwatch"></i></Row>
              <Row className="nav-row">Stopwatch</Row>
            </Col>            
          </Link>
          <Link to="/workouts">
          <Col>
              <Row className="nav-row"><i className="fas fa-archive"></i></Row>
              <Row className="nav-row">Reports</Row>
            </Col>
            </Link>
          <Link to="/settings">
          <Col>
              <Row className="nav-row"><i className="fas fa-user"></i></Row>
              <Row className="nav-row">Profile</Row>
            </Col>
          </Link>
        </div>
      </div>
    </Router>
  )
}

export default connect(null, { initializeSettings, initializeWorkouts })(App)