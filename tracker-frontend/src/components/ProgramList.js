import React from 'react'
import { withRouter} from 'react-router-dom'
import { Badge, Col, Row, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { createNewProgram, deleteProgram } from '../reducers/programReducer'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'


const ProgramList = (props) => {

  const handleDeletion = async (id) => {
    await props.deleteProgram(id)
  }

  const programLevel = (difficulty) => {   
    if (difficulty === "Light") return "green"
    if (difficulty === "Medium") return "yellow"
    if (difficulty === "Hard") return "red"
  }

  return (
    <div className="container">
      <h1>Programs</h1> 
      <div className="container">
        {props.programs.map(program =>
        <Card.Header key={program.id}>
          <Row key={program.id}>
            <Col xs={8}>
              <Link key={program.id} to={`/startProgram/${program.id}`}>
                <Row>
                  <p className="program-header" key={program.id}> 
                    {program.name} 
                  </p>
                </Row>
                <Row>
                  <Badge className={programLevel(program.difficulty)}>{program.difficulty}</Badge>
                </Row>
              </Link>
            </Col>
            <Col className="program-list-icon" xs={2}>
              <Link key={program.id} to={`/programs/${program.id}`}> 
                <Icon icon={faEdit}></Icon>
              </Link>
            </Col>
            <Col className="program-list-icon" xs={2}>
              <button className="btn-icon" onClick={() => handleDeletion(program.id)}>
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




export default withRouter(connect(mapStateToProps, { createNewProgram, deleteProgram })(ProgramList))