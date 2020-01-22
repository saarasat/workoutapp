
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


const DropDown = ({options, value, label, setShow, onSub}) => {
  
  return (
  <Form onSubmit={onSub}>
  <Row className="form-row">
    <Col md={6} xs={4}><Form.Label>{label}</Form.Label></Col>
    <Col md={4} xs={4}>
      <Form.Control name={value} as="select">
        {options.map(option =>
        <option key={option}>{option}</option>
        )}
      </Form.Control>
    </Col>
    <Col md={1} xs={2}>
      <Button type="submit" className="button-settings-save">Save</Button>
    </Col>
    <Col md={1} xs={2}>
      <Button className="button-settings-cancel" onClick={setShow}>Cancel</Button>
    </Col>
  </Row> 
  </Form>
  )
}

export default DropDown
