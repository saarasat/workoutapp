import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Icon from './Icon'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createNewProgram } from '../reducers/programReducer'

const ProgramList = ({programs }) => {
  
  return (
    <div className="container">
      <h1>Programs</h1>
        {programs.map(program => 
        <p className="program-header" key={program.id}>
          <Link to={`/programs/${program.id}`}></Link>
          {program.name}
          </p>)}
          <Link to="/newProgram"><Button>This</Button></Link>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}




export default connect(mapStateToProps, { createNewProgram })(ProgramList)