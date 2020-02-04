import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, initializePrograms, updateProgram } from '../reducers/programReducer'
import { Redirect } from 'react-router-dom'

const ProgramForm = ({ createNewProgram, programs }) => {
  const [redirection, setRedirection] = useState(false)

  const createProgram = async (event) => {
    event.preventDefault()
    const newName = event.target.name.value
    const newMoves = []    
    createNewProgram(newName, newMoves)
    setRedirection(true)
  }

  return (
    <>
    {redirection ?
      <Redirect to={`/programs`}/>
      :
      <div className="container">
      <h1>New Program</h1> 
      <Form onSubmit={createProgram}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text"></Form.Control>
        </Form.Group>
        <Button className="btn-save" type="submit">Create</Button>
      </Form>
      </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
 
  return {
    programs: state.programs,
    moves: state.moves
  }
}

export default connect(mapStateToProps, { updateProgram, initializePrograms, createNewProgram, createNewMove })(ProgramForm)