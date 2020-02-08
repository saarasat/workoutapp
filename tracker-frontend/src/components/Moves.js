import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, addMoveToProgram, deleteMoveFromProgram } from '../reducers/programReducer'
import MovesList from './MovesList'



const Moves = ({ program, moves, createNewMove, addMoveToProgram, deleteMoveFromProgram }) => {
  const [move, setMove] = useState('move name')
  const [kg, setKg] = useState(0)
  const [reps, setReps] = useState(0)
  const [newMoveForm, setNewMoveForm] = useState(false)

  const createId = () => Math.round(Math.random()*1000000)

  const addMoves = async (event) => {
    event.preventDefault()
    const newMove = event.target.move.value
    const programMove = {
      id: createId(),
      name: newMove,
      reps: Number(reps),
      kg: Number(kg)
    }
    const updatedMoves = [...program.moves, programMove]
    const updatedProgram = {...program, moves:updatedMoves}
    await addMoveToProgram(program.id, updatedProgram)
    setMove('')
    setReps(0)
    setKg(0)    
  }

  const addANewMove = async (event) => {
    event.preventDefault()
    const newMove = move
    await createNewMove(newMove)
    event.target.newMove.value = ''
    setNewMoveForm(false)

  }

  const handleDeletion = async (moveId) => {
    const updatedMoves = program.moves.filter(move => move.id !== moveId)
    const updatedProgram = {...program, moves:updatedMoves}
    await deleteMoveFromProgram(program.id, updatedProgram)
  }

  const handleRepChange = (event) => {
    setReps(event.target.value)
  }

  const handleKgChange = (event) => {
    setKg(event.target.value)
  }

  const handleMoveChange = (event) => {
    setMove(event.target.value)
  }

  return (
    <div>
      <h1>{program.name}</h1>
      <Form onSubmit={addMoves}>
      <Row>
        <Col xs={4}>
          <Form.Group>
            <Form.Label>Move</Form.Label>
            <Form.Control onChange={handleMoveChange} as="select" className="select-dark" value={move} name="move" placeholder={move}>
            {moves.reverse().map(item => 
             <option key={item.id}>{item.name}</option>
             )}
            </Form.Control>
          </Form.Group>
          <p className="green" onClick={() => setNewMoveForm(!newMoveForm)}><i>New move</i></p>
        </Col>

        <Col xs={4}>
          <Form.Group>
            <Form.Label>Reps</Form.Label>
            <Form.Control onChange={handleRepChange} value={reps} name="reps" type="number" placeholder={reps}/>
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Group>
            <Form.Label>Kg</Form.Label>
            <Form.Control onChange={handleKgChange} value={kg} name="kg" type="number" placeholder={kg}/>
          </Form.Group>
        </Col>
        <Col xs={2}>
          <Form.Label></Form.Label>
          <Button className="btn-save" type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
    {program && program.moves.length > 0 ?
    <MovesList items={program.moves} handleDeletion={handleDeletion}/>
    : null
    }
    {newMoveForm ? 
    <Form onSubmit={addANewMove}>
      <Form.Group>
        <Form.Label>
          Name:
        </Form.Label>
        <Form.Control name="newMove" type="text" placeholder="name of the move" />
        <Button className="btn-save" type="submit">Add new move</Button>
        <Button className="btn-cancel" onClick={() => setNewMoveForm(false)}>Cancel</Button>
      </Form.Group>
    </Form> : null}
    </div>
    
  )
}
  const mapStateToProps = (state, ownProps) => {
      const program = state.programs.find(p => p.id === ownProps.id)
      return {
        program,
        programs: state.programs,
        moves: state.moves
      }
  }
  


export default connect(mapStateToProps, { addMoveToProgram, createNewProgram, createNewMove, deleteMoveFromProgram })(Moves)
