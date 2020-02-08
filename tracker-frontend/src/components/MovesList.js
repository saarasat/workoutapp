import React from 'react'
import {  Col, Row, Card } from 'react-bootstrap'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import Icon from './Icon'


const SortableItem = SortableElement(({name, reps, kg, id, handleDeletion}) => (
  <Card.Header>
    <Row>
    <Col xs={4}>{name}</Col>
    <Col xs={2}> x {reps}</Col>
    <Col xs={3}>{kg} kg</Col>
    <Col xs={3}>
      <button className="btn-icon logout" onClick={() => handleDeletion(id)}>
        <Icon icon={faTrash} color="gray"></Icon>
      </button>
    </Col>
    </Row>
  </Card.Header>
))



const MovesList = SortableContainer(({items, handleDeletion}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem
          key={`item-${index}`}
          index={index}
          sortIndex={index}
          name={value.name}
          reps={value.reps}
          kg={value.kg}
          id={value.id}
          handleDeletion={handleDeletion}
        />
      ))}
    </div>
  )
})



export default MovesList 