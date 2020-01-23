
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


const DropDown = ({options, value, label, setShow, onSub}) => {
  
  return (
  <Form onSubmit={onSub}>
    <Row className="form-row">
      <Col lg={6} md={6} xs={4}><Form.Label>{label}</Form.Label></Col>
      <Col lg={4} md={4} xs={4}>
        <Form.Control name={value} as="select">
          {options.map(option =>
          <option key={option}>{option}</option>
          )}
        </Form.Control>
      </Col>
      <Col lg={1} md={1} xs={2}>
        <Button type="submit" className="btn-save">Save</Button>
      </Col>
      <Col lg={1} md={1} xs={2}>
        <Button className="btn-cancel" onClick={setShow}>Cancel</Button>
      </Col>
    </Row> 
  </Form>
  )
}

export default DropDown
