import React from 'react'
import { Button, Form } from 'react-bootstrap'


const MoveForm = ({addANewMove, hide}) => {
  return (
    <Form onSubmit={addANewMove}>
      <Form.Group>
        <Form.Label>
          Name:
        </Form.Label>
        <Form.Control name="newMove" type="text" placeholder="name of the move" />
        <Button className="btn-save" variant="dark" type="submit">Add new move</Button>
        <Button className="btn-cancel" variant="dark" onClick={hide}>Cancel</Button>
      </Form.Group>
    </Form>
  )
}

export default MoveForm