import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Col, Form, Row, Card } from 'react-bootstrap'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, addMoveToProgram, deleteMoveFromProgram } from '../reducers/programReducer'
import Icon from './Icon'
import MovesList from './MovesList'
import NewMoveForm from './NewMoveForm'
import { faPlus, faPlay } from '@fortawesome/free-solid-svg-icons'




const Moves = ({ program, moves, createNewMove, addMoveToProgram }) => {
  console.log(moves)
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
            {moves.length > 0 ? moves.reverse().map(item => 
             <option key={item.id}>{item.name}</option>
             ) : null}
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
        <button className="btn-icon-plus" type="submit"><Icon color="green" icon={faPlus}></Icon></button>
        </Col>
      </Row>
    </Form>
    {newMoveForm ? 
    <NewMoveForm addANewMove={addANewMove} hide={() => setNewMoveForm(!newMoveForm)}/> 
    : 
    <>
      <Button className="green" variant="dark" onClick={() => setNewMoveForm(!newMoveForm)}><i>Missing a move? Add one</i></Button>
      <Card.Header className="program-header">
        <Row>
          <Col className="program-move" xs={6}>Move</Col>
          <Col xs={3}>Reps</Col>
          <Col xs={3}>Kg</Col>
        </Row>
      </Card.Header>
    </>}

    {program && program.moves.length > 0 ?
    <div>
      <MovesList items={program.moves} id={program.id} addMoves={addNewMoves} />
      <Link to={`/startProgram/${program.id}`}>
        <Card.Header className="program-move">
          <Row>
            <Col>Start this program</Col>
            <Col><Icon color="green" icon={faPlay}></Icon></Col>
          </Row>
        </Card.Header>
      </Link> 
    </div>
      : null}
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
