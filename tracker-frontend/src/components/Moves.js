import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, addMoveToProgram, deleteMoveFromProgram } from '../reducers/programReducer'
import Icon from './Icon'


const Moves = ({ program,  moves, createNewMove, addMoveToProgram, deleteMove, updateMoveValues }) => {
  const [move, setMove] = useState('move name')
  const [kg, setKg] = useState(0)
  const [reps, setReps] = useState(0)
  const [programMoves, setProgramMoves] = useState([])
  const [newMoveForm, setNewMoveForm] = useState(false)

  useEffect(() => {
    if (program && program.moves.length > 0) {
      setProgramMoves(program.moves)
    }
  },[])

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
    await addMoveToProgram(program.id, programMove)
    setProgramMoves([...programMoves, programMove])
    setMove('')
    setReps(0)
    setKg(0)    
  }

  const addANewMove = async (event) => {
    event.preventDefault()
    const newMove = event.target.newMove.value 
    createNewMove(newMove)
    event.target.newMove.value = ''
    setNewMoveForm(false)
  }

  const handleDeletion = (moveId) => {
    const updatedMoves = program.moves.filter(move => move.id !== moveId)
    deleteMoveFromProgram(program.id, updatedMoves)
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

        <Col xs={3}>
          <Form.Group>
            <Form.Label>Reps</Form.Label>
            <Form.Control onChange={handleRepChange} value={reps} name="reps" type="number" placeholder={reps}/>
          </Form.Group>
        </Col>
        <Col xs={3}>
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
      {programMoves && program && program.moves.length > 0 ?  
        programMoves.map(move =>
          <p key={move.id}>
            {move.name}
            {move.reps}
            {move.kg}
            <button className="btn-icon logout" onClick={() => handleDeletion(move.id)}>
              <Icon icon={faTrash} color="gray"></Icon>
            </button>
        </p>) 
        : null}
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
