
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const DropDown = ({options, value, label, onChange }) => {

  
  return (
      <Row className="form-row">
        <Col xs={8}><Form.Label>{label}</Form.Label></Col>
        <Col xs={4}>
          <Form.Control onChange={onChange} plaintext={true} className="form-control-profile" name={value} as="select">
            {options.map(option =>
            <option key={option}>{option}</option>
            )}
          </Form.Control>
        </Col>
      </Row> 
  )
}

export default DropDown
