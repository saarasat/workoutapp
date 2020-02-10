import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'


const NewMoveForm = ({addANewMove, hide}) => {
  return (
    <div className="form-container">
      <Form onSubmit={addANewMove}>
        <Form.Group>
          <Form.Label><b>Move:</b></Form.Label>
          <Form.Control name="newMove" type="text" placeholder="name of the move" />
          <Row className="form-row">
            <Button className="btn-save" variant="dark" type="submit">Add new move</Button>
            <Button className="btn-cancel" variant="dark" onClick={hide}>Cancel</Button>
          </Row>
        </Form.Group>
      </Form>
    </div>
  )
}

export default NewMoveForm