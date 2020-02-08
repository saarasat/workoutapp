import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'react-bootstrap'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'
import { createNewMove } from '../reducers/moveReducer'
import { createNewProgram } from '../reducers/programReducer'

const Program = ({program}) => {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(null)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
    setDirection(e.direction)
  }

  return (
    <>
    {program ? 
      <div>
        <h1>{program.name}</h1>
        {program.moves.length > 0 ?
        <Carousel 
         
          interval={20000000} 
          activeIndex={index} 
          direction={direction} 
          onSelect={handleSelect}
          slide={false}
          nextIcon={<span></span>}
          prevIcon={<span></span>}
        >
          {program.moves.map(move => 
            <Carousel.Item className="carousel-move"> 
              <h3>{move.name}</h3>
              <h4>x {move.reps}</h4>
              <h4><Icon icon={faWeightHanging}/>{move.kg} kg</h4>
            </Carousel.Item>  
          )}
        </Carousel>
        : null}
      </div> 
    : null}
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




export default connect(mapStateToProps, { createNewProgram, createNewMove })(Program)