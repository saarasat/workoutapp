import React, { useState } from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewProgram, deleteProgram } from '../reducers/programReducer'
import ProgramForm from './ProgramForm'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'


const ProgramList = ({ programs, deleteProgram }) => {
  const [show, setShow] = useState(false)
  const [showHeader, setShowHeader] = useState(true)

  const programLevel = (difficulty) => {   
    if (difficulty === "Light") return "green"
    if (difficulty === "Medium") return "yellow"
    if (difficulty === "Hard") return "red"
  }

  
  const handleDeletion = (id) => {
    deleteProgram(id)
  }

  const toggleHeader = () => {
    setShowHeader(!showHeader)
    setShow(!show)
  }

  return (
    <div className="container">
      {showHeader ? 
      <>
        <h1>Programs</h1>
      </> 
      : null}
      {show ? <ProgramForm hideForm={toggleHeader} /> : null}
      <div className="container">
        {programs.map(program =>
          <Row className="menu-header">
            <Col xs={8}>
              <Link key={program.id} to={`/startProgram/${program.id}`}>
              <p className="program-header" key={program.id}> 
                {program.name} 
                <Badge className={programLevel(program.difficulty)}>{program.difficulty}</Badge>
              </p>
                </Link>
            </Col>
            <Col className="program-list-icon" xs={3}>
              <Link key={program.id} to={`/programs/${program.id}`}> 
                <Icon color="orange" icon={faEdit}></Icon>
              </Link>
            </Col>
          </Row>
        )}
      </div>
      <Link to="/newProgram">
      <Button variant="dark" className="btn-header-save">new</Button>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}




export default connect(mapStateToProps, { createNewProgram, deleteProgram })(ProgramList)