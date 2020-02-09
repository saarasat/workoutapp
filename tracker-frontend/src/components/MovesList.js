import React, {Component, useState} from 'react'
import { connect } from 'react-redux'
import { Button, Badge, Col, Row, Card } from 'react-bootstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {addMoveToProgram, deleteMoveFromProgram} from '../reducers/programReducer'
import Icon from './Icon'
import arrayMove from 'array-move'



const SortableItem = SortableElement(({name, reps, id, kg}) => {
  return (
  <Card.Header>
    <Row>
      <Col className="program-move"  xs={6}>{name}</Col>
      <Col  xs={3}>x {reps}</Col>
      <Col  xs={3}>{kg} kg</Col>
    </Row>
  </Card.Header>)})


const SortableList = SortableContainer(({items, id}) => {
  
  return (
    <>
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${value.id}`} index={index} name={value.name} reps={value.reps} kg={value.kg} id={value.id} />
      ))}
    </div>
    </>
  )
})


class Moveslist extends Component {

  state = {
    items: this.props.items,
    id: this.props.id,
    program: this.props.program,
    addMoves: this.props.addMoves,
  }
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) {
      this.setState({items: this.props.items})
    }
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }))
    this.state.addMoves(this.state.program, this.state.items)
  }

  render() {
    return <SortableList id={this.state.id} items={this.state.items} onSortEnd={this.onSortEnd} />
  }
}

const mapStateToProps = (state, ownProps) => {
  const program = state.programs.find(p => p.id === ownProps.id)
  return {
    program,
  }
}

export default connect(mapStateToProps, {addMoveToProgram})(Moveslist)

