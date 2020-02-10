import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Moves from './Moves'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import Program from './Program'
import ProgramForm from './ProgramForm'
import ProgramList from './ProgramList'
import Profile from './Profile'
import Workout from './Workout'
import WorkoutList from './WorkoutList'
import Stopwatch from './Stopwatch'
import SingleResult from './SingleResult'
import UserForm from './UserForm'
import {handleLogout} from '../reducers/loginReducer'



const PageRouter = ({handleLogout, user}) => {

  return (
    <Router>
      {user ?
        <div>
          <TopNav handleLogout={handleLogout} />
          <div className="body">
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/programs" render={()=> <ProgramList/>} />
            <Route exact path="/newProgram" render={()=> <ProgramForm/>} />
            <Route exact path="/moves" render={({match})=> <Moves id={(match.params.id)}/>} />
            <Route exact path="/stopwatch" render={()=> <Stopwatch></Stopwatch>} />
            <Route exact path="/workouts" render={() => <WorkoutList />} />
            <Route exact path="/training/:type" render={({match}) => <Workout type={(match.params.type)}/>} />
            <Route exact path="/workouts/:id" render={({match}) => <SingleResult id={(match.params.id)}/>} />          
            <Route exact path="/programs/:id" render={({match}) => <Moves id={(match.params.id)}/>} />          
            <Route exact path="/startProgram/:id" render={({match}) => <Program id={(match.params.id)}/>} />          
            <Route exact path="/settings" render={() => <Profile id={user.id}/>} />
          </div>
          <BottomNav/>
        </div> 
        :
        <>   
          <Switch>
            <Route exact path="/newAccount" render={() => <UserForm />} />
            <Route path="/" render={() => <Login />} />
          </Switch>
        </>
      }
    </Router>
  )
}

export default connect(null,{handleLogout})(PageRouter)
