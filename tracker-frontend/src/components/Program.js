import React, {useState } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Icon from './Icon'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram, updateProgram } from '../reducers/programReducer'
import dataService from '../services/dataService'

const Program = ({programs, moves, createNewMove, createNewProgram}) => {
  const [name, setName] = useState('')
  const [programMoves, setProgramMoves] = useState([])
  const [move, setMove] = useState('move name')
  const [kg, setKg] = useState(0)
  const [reps, setReps] = useState(0)
  const [showMoveForm, setShowMoveForm] = useState(false)
  const [program, setProgram] = useState({})

  const createProgram = async (event) => {
    event.preventDefault()
    const newName = event.target.name.value
    const newMoves = programMoves
    const newProgram = await createNewProgram(newName, newMoves)
    setName(newName)
    setProgram(programs[programs.length-1])
  }

  const addMoves = (event) => {
    event.preventDefault()
    const newMove = event.target.move.value
    const programMove = {
      name: newMove,
      reps: Number(reps),
      kg: Number(kg)
    }
    const programWithMove = {...program, moves: [...programMoves, programMove]}
    console.log(programWithMove.id)
    updateProgram(programWithMove, programWithMove.id)
    setProgramMoves([...programMoves, programMove])
    setMove('')
    setReps(0)
    setKg(0)    
  }

  const addANewMove = async (event) => {
    event.preventDefault()
    const newMove = event.target.newMove.value 
    createNewMove(newMove)
  }

  const handleAdding = (move, value) => {
    const updatedMoves = [...programMoves]
    if (value === "reps") updatedMoves.find(programMove => programMove.move === move).reps += 1
    if (value === "kg") updatedMoves.find(programMove => programMove.move === move).kg += 1
    setProgramMoves(updatedMoves)
  }

  const handleRemoval = (move, value) => {
    const updatedMoves = [...programMoves]
    if (value === "reps") updatedMoves.find(programMove => programMove.move === move).reps -= 1
    if (value === "kg") updatedMoves.find(programMove => programMove.move === move).kg -= 1
    setProgramMoves(updatedMoves)
  }

  const handleDeletion = (deleted) => {
    setProgramMoves(moves.filter(m => m.move !== deleted))
  }


  const rows = () => programMoves.map(move =>
      <p key={move.name}>
        {move.name}
        {move.reps}
        <Button onClick={() => handleAdding(move.move, "reps")}>+</Button>
        <Button onClick={() => handleRemoval(move.move, "reps")}>-</Button>
        {move.kg}
        <Button onClick={() => handleAdding(move.move, "kg")}>+</Button>
        <Button onClick={() => handleRemoval(move.move, "kg")}>-</Button>
        <button className="btn-icon logout" onClick={() => handleDeletion(move.move)}>
          <Icon icon={faTrash} color="gray"></Icon>
        </button>
      </p>
    )

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
    <div className="container">   
        {name === '' ?
        <div>
        <h1>New Program</h1> 
        <Form onSubmit={createProgram}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={() => setShowMoveForm(true)} type="text"></Form.Control>
          </Form.Group>
        </Form>
        </div>
        :
        <div>
        <h1>{name}</h1>  
        
        <div>
          <Form onSubmit={addMoves}>
          <Row>
            <Col xs={6}>
              <Form.Group>
                <Form.Label>Move</Form.Label>
                <Form.Control onChange={handleMoveChange} as="select" className="select-dark" value={move} name="move" placeholder={move}>
                {moves.map(item => 
                  <option key={item.id}>{item.name}</option>
                 )}
                </Form.Control>
              </Form.Group>
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
            <Button type="submit">Add</Button>

          </Row>
        </Form>
        <Button onClick={() => setShowMoveForm(true)}></Button>
        {showMoveForm ? 
        <Form onSubmit={addANewMove}>
          <Form.Group>
            <Form.Label>
              Move name:
            </Form.Label>
            <Form.Control name="newMove" type="text" placeholder="name of the move" />
            <Button type="submit">Add new move</Button>
            <Button onClick={() => setShowMoveForm(false)}>Cancel</Button>
          </Form.Group>
        </Form> : null}
          <ul>
            {rows()}
          </ul>
        </div>
        </div>
        }
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    programs: state.programs,
    moves: state.moves
  }
}




export default connect(mapStateToProps, { updateProgram, createNewProgram, createNewMove })(Program)