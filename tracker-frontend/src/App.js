import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Program from './components/Program'
import ProgramList from './components/ProgramList'
import Profile from './components/Profile'
import Workout from './components/Workout'
import WorkoutList from './components/WorkoutList'
import Stopwatch from './components/Stopwatch'

import loginService from './services/loginService'
import dataService from './services/dataService'
import { initializeSettings } from './reducers/settingsReducer'
import { initializeWorkouts } from './reducers/workoutReducer'
import { initializePrograms } from './reducers/programReducer'
import { initializeMoves } from './reducers/moveReducer'
import SingleResult from './components/SingleResult'


export const App = (props) => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword]  = useState('')
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    props.initializeWorkouts()
  }, [])

  useEffect(() => {
    props.initializeSettings()
  })

  useEffect(() => {
    props.initializePrograms()
  })

  useEffect(() => {
    props.initializeMoves()
  })

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      dataService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedUser', JSON.stringify(user)
      )
      dataService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setTimeout(() => {
       
      }, 5000)
    }
  }
  
  const handleLogout = () => {
    dataService.setToken('')
    setUser(null)
    window.localStorage.clear()
  }

  
 
  return (
    <div>
      {user ?
      <Router>
        <TopNav handleLogout={handleLogout} />
        <div className="body">
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/programs" render={()=> <ProgramList/>} />
          <Route exact path="/newProgram" render={()=> <Program/>} />
          <Route exact path="/stopwatch" render={()=> <Stopwatch></Stopwatch>} />
          <Route exact path="/workouts" render={() => <WorkoutList />} />
          <Route exact path="/training/:type" render={({match}) => <Workout type={(match.params.type)}/>} />
          <Route exact path="/workouts/:id" render={({match}) => <SingleResult id={(match.params.id)}/>} />          
          <Route exact path="/programs/:id" render={({match}) => <ProgramList id={(match.params.id)}/>} />          
          <Route exact path="/settings" render={() => <Profile />} />
        </div>
        <BottomNav/>
      </Router>
      : <Login
          loginVisible={loginVisible}
          showLogin={() => setLoginVisible(true)}
          hideLogin={() => setLoginVisible(false)}
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
          handleCancel={() => setLoginVisible(false)}
        />}
    </div>
  )
}



export default connect(null, { initializeSettings, initializePrograms, initializeWorkouts, initializeMoves })(App)