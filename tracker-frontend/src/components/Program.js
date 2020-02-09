import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, Carousel } from 'react-bootstrap'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram } from '../reducers/programReducer'

const Program = (props) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  const handleFinish = () => {
    props.history.push("/training/My%20programs")
  }

  return (
    <>
    {props.program ? 
      <div>
        <h1>{props.program.name}</h1>
        {props.program.moves.length > 0 ?
        <Carousel 
          interval={20000000} 
          activeIndex={index} 
          direction={direction} 
          onSelect={handleSelect}
          slide={false}        >
          {props.program.moves.map(move => 
            <Carousel.Item >
              <div className="carousel-move">
                <h3 className="carousel-headline">{move.name}</h3>
                <h4 className="green">x {move.reps}</h4>
                <h4>{move.kg} kg</h4>
              </div>
            </Carousel.Item>
          )}
          <Carousel.Item>
          <div className="carousel-move">
            <h1><Icon icon={faTrophy} color="orange"></Icon></h1>
            <h3>Well done!</h3>
            <Button className="btn-header-save" variant="dark" onClick={handleFinish}>Save your workout</Button>
            </div>
          </Carousel.Item>
        </Carousel>
        : null}
      </div> 
    :null}
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




export default withRouter(connect(mapStateToProps, { createNewProgram, createNewMove })(Program))