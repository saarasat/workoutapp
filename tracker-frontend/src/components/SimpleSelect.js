import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'


const SelectPrepend = ({label, control, options }) => {

  const correctOptions = () => {
    if (control === 'sport') return (
      <Form.Control name={control} as="select" className="select-dark">
        {options.map(item => <option key={item.id}>{item.sport}</option>)}
      </Form.Control>
    ) 
    if (control === 'program') return (
      <Form.Control name={control} as="select" className="select-dark">
        {options.map(item => <option key={item.id}>{item.sport}</option>)}
      </Form.Control>
    )
  }

  return (
    <Row className="form-row">
      <Col xs={4}><Form.Label>{label}</Form.Label></Col>
      <Col xs={8}>
        {correctOptions()}
      </Col>
    </Row>
  )
}

export default SelectPrepend