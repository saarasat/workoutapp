import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Moves from './components/Moves'
import TopNav from './components/TopNav'
import BottomNav from './components/BottomNav'
import Program from './components/Program'
import ProgramForm from './components/ProgramForm'
import ProgramList from './components/ProgramList'
import Profile from './components/Profile'
import Workout from './components/Workout'
import WorkoutList from './components/WorkoutList'
import Stopwatch from './components/Stopwatch'
import SingleResult from './components/SingleResult'
import UserForm from './components/UserForm'

import dataService from './services/dataService'
import { initializeSettings } from './reducers/settingsReducer'
import { initializeWorkouts } from './reducers/workoutReducer'
import { initializePrograms } from './reducers/programReducer'
import { initializeMoves } from './reducers/moveReducer'
import { handleLogin, handleLogout, initUser } from './reducers/loginReducer'
import { initializeUsers } from './reducers/usersReducer'

export const App = (props) => {
  
  useEffect(() => {
    props.initUser()
    props.initializeUsers()
    props.initializeWorkouts()
    props.initializeSettings()
    props.initializePrograms()
    props.initializeMoves()
  }, [])

  const user = props.user

  const createNewUser = (username, password) => {
    const newUser = {username: username, password: password}
    dataService.create('users', newUser)
  }
  return (
    <div>
      <Router>
      {user ?
        <div>
          <TopNav handleLogout={props.handleLogout} />
          <div className="body">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/programs" render={()=> <ProgramList/>} />
            <Route exact path="/moves" render={({match})=> <Moves id={(match.params.id)}/>} />
            <Route exact path="/stopwatch" render={()=> <Stopwatch></Stopwatch>} />
            <Route exact path="/workouts" render={() => <WorkoutList />} />
            <Route exact path="/training/:type" render={({match}) => <Workout type={(match.params.type)}/>} />
            <Route exact path="/workouts/:id" render={({match}) => <SingleResult id={(match.params.id)}/>} />          
            <Route exact path="/programs/:id" render={({match}) => <Program id={(match.params.id)}/>} />          
            <Route exact path="/settings" render={() => <Profile id={user.id}/>} />
          </div>
          <BottomNav/>
        </div> 
        :
        <> 
          <Route path="/">
            <>
            <Switch>
              <Route exact path="/newAccount" render={() => <UserForm createNewUser={createNewUser} />} />
              <Route path="/" render={() => <Login />} />
            </Switch>
            </>
          </Route>
        </>
        }
      </Router>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { handleLogout, handleLogin, initUser, initializeUsers, initializeSettings, initializePrograms, initializeWorkouts, initializeMoves })(App)