import React, { useState } from 'react'
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewProgram } from '../reducers/programReducer'
import ProgramForm from './ProgramForm'

const ProgramList = ({programs }) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="container">
      {showForm ? <ProgramForm /> : <Button onclick={setShowForm(true)}>Create new program</Button>}
      <h1>Programs </h1>
        {programs.reverse().map(program => 
        <Link key={program.id} to={`/programs/${program.id}`}>
        <p className="program-header" key={program.id}>
          {program.name}
          </p></Link>)}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}




export default connect(mapStateToProps, { createNewProgram })(ProgramList)