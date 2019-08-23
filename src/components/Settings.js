import React from 'react'
import { Form, Col, Row } from 'react-bootstrap'


const Settings = () => {

  const setSettings = (event) => {
    event.preventDefault()

  }

  const createOptions = (start, end) => {
    return Array(end).fill(start).map((e,i) => i+1)
  }

  let ages = createOptions(0,100)
  let weights = createOptions(40,140)
  let heights = createOptions(100,220)

  return (
    <div className="container">
      <Form onSubmit={setSettings}>     
        <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
          <Form.Label column sm={2}>Age</Form.Label>
          <Col sm={2}>
            <Form.Control as="select">
              {ages.map(age =>
                <option key={age}>{age}</option>
              )}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="another">
          <Form.Label column sm={2}>Weight</Form.Label>
          <Col sm={2}>
            <Form.Control as="select">
              {weights.map(weight =>
                <option key={weight}>{weight}</option>  
              )}
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Height</Form.Label>
          <Col sm={2}>
            <Form.Control as="select">
              {heights.map(height =>
                <option key={height}>{height}</option>  
              )}
            </Form.Control>
          </Col>
        </Form.Group>

      </Form>
    </div>
  )
}

export default Settings