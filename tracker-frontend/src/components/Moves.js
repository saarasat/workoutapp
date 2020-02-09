import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row, Card } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, addMoveToProgram, deleteMoveFromProgram } from '../reducers/programReducer'
import MovesList from './MovesList'
import MoveForm from './MoveForm'



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
    const moveToAdd = event.target.newMove.value
    await createNewMove(moveToAdd)
    setNewMoveForm(false)

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

  const addNewMoves = async (program, items) => {
    const updatedProgram = {...program, moves:items}
    await addMoveToProgram(program.id, updatedProgram)
  }

  return (
    <>
      {program ? 
      <div className="container">
      <Form onSubmit={addMoves}>
      <h1>{program.name}</h1>
      <Row className="form-row">
        <Col xs={4}>
          <Form.Group>
            <Form.Label>Move</Form.Label>
            <Form.Control onChange={handleMoveChange} as="select" className="select-dark" value={move} name="move" placeholder={move}>
            {moves.reverse().map(item => 
             <option key={item.id}>{item.name}</option>
             )}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={4}>
          <Form.Group>
            <Form.Label>Reps</Form.Label>
            <Form.Control onChange={handleRepChange} value={reps} className="select-dark" name="reps" type="number" placeholder={reps}/>
          </Form.Group>
        </Col>
        <Col xs={3}>
          <Form.Group>
            <Form.Label>Kg</Form.Label>
            <Form.Control onChange={handleKgChange} value={kg} className="select-dark" name="kg" type="number" placeholder={kg}/>
          </Form.Group>
        </Col>
        <Col className="header-col" xs={1}>
          <Form.Label></Form.Label>
        <Button className="btn-save" variant="light" type="submit">Add</Button>
        </Col>
      </Row>
      <p className="green" onClick={() => setNewMoveForm(!newMoveForm)}><i>New move</i></p>
    </Form>
    {newMoveForm ? 
    <MoveForm addANewMove={addANewMove} hide={() => setNewMoveForm(!newMoveForm)}/> 
    :
    <Card.Header className="program-header">
      <Row>
        <Col className="program-move" xs={6}>Move</Col>
        <Col xs={3}>Reps</Col>
        <Col xs={3}>Kg</Col>
      </Row>
    </Card.Header>}

    {program && program.moves.length > 0 ?
    <MovesList items={program.moves} id={program.id} addMoves={addNewMoves} /> : null}
    
    </div>: null}
    </>
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
