import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewProgram } from '../reducers/programReducer'
import ProgramForm from './ProgramForm'

const ProgramList = ({ programs }) => {
  const [show, setShow] = useState(false)
  const [showHeader, setShowHeader] = useState(true)

  const programLevel = (difficulty) => {   
    if (difficulty === "Light") return "green"
    if (difficulty === "Medium") return "yellow"
    if (difficulty === "Hard") return "red"
  }

  const toggleHeader = () => {
    setShowHeader(!showHeader)
    setShow(!show)
  }

  return (
    <div className="container">
      {showHeader ? 
      <>
        <h1>Programs </h1>
        <Button onClick={toggleHeader}>Create new program</Button>
      </> 
      : null}
      {show ? <ProgramForm hideForm={toggleHeader} /> : null}
      <div>
        {programs.map(program => 
          <Link key={program.id} to={`/programs/${program.id}`}>
            <p className="program-header" key={program.id}> 
              {program.name} 
              <b className={programLevel(program.difficulty)}>{program.difficulty}</b>
            </p>
          </Link>)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}




export default connect(mapStateToProps, { createNewProgram })(ProgramList)