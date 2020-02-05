import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Moves from './Moves'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram } from '../reducers/programReducer'

const Program = ({id, programs}) => {
  const [program, setProgram] = useState({})  

  useEffect(() => {
    const prog = programs.find(p => p.id === id)
    setProgram(prog)
  }, [])

  return (
    <>
    {program ? 
      <div className="container">
        <h1>{program.name}</h1>
        <Moves id={id}/>
      </div>
    : 
    null}
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    programs: state.programs,
    moves: state.moves
  }
}




export default connect(mapStateToProps, { createNewProgram, createNewMove })(Program)