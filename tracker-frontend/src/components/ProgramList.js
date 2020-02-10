import React from 'react'
import { Badge, Col, Row, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewProgram, deleteProgram } from '../reducers/programReducer'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'


const ProgramList = ({ programs, deleteProgram }) => {

  const programLevel = (difficulty) => {   
    if (difficulty === "Light") return "green"
    if (difficulty === "Medium") return "yellow"
    if (difficulty === "Hard") return "red"
  }

  return (
    <div className="container">
      <h1>Programs</h1> 
      <div className="container">
        {programs.map(program =>
        <Card.Header key={program.id}>
          <Row key={program.id}>
            <Col xs={8}>
              <Link key={program.id} to={`/startProgram/${program.id}`}>
                <p className="program-header" key={program.id}> 
                  {program.name} 
                  <Badge className={programLevel(program.difficulty)}>{program.difficulty}</Badge>
                </p>
              </Link>
            </Col>
            <Col className="program-list-icon" xs={2}>
              <Link key={program.id} to={`/programs/${program.id}`}> 
                <Icon icon={faEdit}></Icon>
              </Link>
            </Col>
            <Col className="program-list-icon" xs={2}>
              <button className="btn-icon" onClick={() => deleteProgram(program.id)}>
              <Icon color="gray" icon={faTrash}></Icon>
              </button>
            </Col>
          </Row>
        </Card.Header>
        )}
      </div>
      <div className="container">
      <Card.Header>
        <Link to={`/newProgram`}>
          <Row>
            <Col xs={8}><p className="program-header">Add new program</p></Col>
            <Col xs={4}><Icon color="green" icon={faPlus}></Icon></Col>
          </Row>
        </Link>
      </Card.Header>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}




export default connect(mapStateToProps, { createNewProgram, deleteProgram })(ProgramList)