import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageRouter from './components/PageRouter'
import { initializeSettings } from './reducers/settingsReducer'
import { initializeWorkouts } from './reducers/workoutReducer'
import { initializePrograms } from './reducers/programReducer'
import { initializeMoves } from './reducers/moveReducer'
import { initUser } from './reducers/loginReducer'
import { initializeUsers } from './reducers/usersReducer'

export const App = (props) => {
  
  useEffect(() => {
    props.initUser()
  }, [])

  const user = props.user

  useEffect(() => {
    if (user) {
      props.initializeWorkouts()
      props.initializeSettings()
      props.initializePrograms()
      props.initializeMoves()  
    }
  })

  return (
    <div>
      <PageRouter user={user}></PageRouter>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, { initUser, initializeUsers, initializeSettings, initializePrograms, initializeWorkouts, initializeMoves })(App)