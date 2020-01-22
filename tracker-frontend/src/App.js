import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Home from './components/Home'
import Icon from './components/Icon'
import Profile from './components/Profile'
import Stopwatch from './components/Stopwatch'
import WorkoutList from './components/WorkoutList'
import Workout from './components/Workout'
import loginService from './services/login'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import settingsReducer, { initializeSettings } from './reducers/settingsReducer'
import settingsService from './services/settingsService'
import { initializeWorkouts } from './reducers/workoutReducer'
import { faRunning, faArchive, faStopwatch, faUser } from '@fortawesome/free-solid-svg-icons'


export const App = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword]  = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    props.initializeWorkouts()
  })

  useEffect(() => {
    props.initializeSettings()
  })

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      settingsService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      settingsService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log(user)
    } catch (exception) {
      setTimeout(() => {
       
      }, 5000)
    }
  }

  const loginForm = () => {
    return (
      <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <div>username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>password
      <input
        type="password"
        value={password}
        name="Password"
        onChange={({ target }) => setPassword(target.value)}
      />
      </div>
      <button type="submit">login</button>
      </form>
    </div>
    )
  }
  

  return (
    <div>
      {user ?
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
                <Row className="nav-row green"><Icon icon={faRunning}></Icon></Row>
                <Row className="nav-row">Training</Row>
              </Col>
            </Link>
            <Link to="/stopwatch">
            <Col>
                <Row className="nav-row green"><Icon icon={faStopwatch}></Icon></Row>
                <Row className="nav-row">Stopwatch</Row>
              </Col>            
            </Link>
            <Link to="/workouts">
            <Col>
                <Row className="nav-row green"><Icon icon={faArchive}></Icon></Row>
                <Row className="nav-row">Reports</Row>
              </Col>
              </Link>
            <Link to="/settings">
            <Col>
                <Row className="nav-row green"><Icon icon={faUser}></Icon></Row>
                <Row className="nav-row">Profile</Row>
              </Col>
            </Link>
          </div>
        </div>
      </Router>
      : 
      loginForm()}
    
 
    
    </div>
  )
}

export default connect(null, { initializeSettings, initializeWorkouts })(App)