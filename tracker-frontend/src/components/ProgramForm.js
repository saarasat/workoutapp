import React from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, initializePrograms } from '../reducers/programReducer'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const ProgramForm = ({ createNewProgram, history, setNotification }) => {

  const createProgram = async (event) => {
    event.preventDefault()
    const newName = event.target.name.value
    if (newName.length < 3 || newName.length > 50) {
      setNotification('The name should be between 3-50 characters')
      return
    }
    const newDifficulty = event.target.difficulty.value
    const newMoves = []    
    await createNewProgram(newName, newDifficulty, newMoves)
    history.push("/programs")
  }

  return (
    <>
      <div className="container">
      <h1>New Program</h1> 
      <Form onSubmit={createProgram}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" className="select-dark"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Difficulty</Form.Label>
          <Form.Control name="difficulty" as="select" className="select-dark">
            <option key={1}>Light</option>
            <option key={2}>Medium</option>
            <option key={3}>Hard</option>
          </Form.Control>
        </Form.Group>
        <Button className="btn-header-save" variant="dark" type="submit">Create</Button>
      </Form>
      </div>
      <Notification />
    </>
  )
}

const mapStateToProps = (state) => {
 
  return {
    programs: state.programs,
    moves: state.moves
  }
}

export default withRouter(connect(mapStateToProps, { initializePrograms, createNewProgram, createNewMove, setNotification })(ProgramForm))