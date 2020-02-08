import React from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, initializePrograms } from '../reducers/programReducer'
import {withRouter} from 'react-router-dom'


const ProgramForm = ({ createNewProgram, history }) => {

  const createProgram = async (event) => {
    event.preventDefault()
    const newName = event.target.name.value
    const newDifficulty = event.target.difficulty.value
    const newMoves = []    
    createNewProgram(newName, newDifficulty, newMoves)
    history.push("/programs")
  }

  return (
    <>
      <div className="container">
      <h1>New Program</h1> 
      <Form onSubmit={createProgram}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Difficulty</Form.Label>
          <Form.Control name="difficulty" as="select">
            <option key={1}>Light</option>
            <option key={2}>Medium</option>
            <option key={3}>Hard</option>
          </Form.Control>
        </Form.Group>
        <Button className="select-save" type="submit">Create</Button>
      </Form>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
 
  return {
    programs: state.programs,
    moves: state.moves
  }
}

export default withRouter(connect(mapStateToProps, { initializePrograms, createNewProgram, createNewMove })(ProgramForm))