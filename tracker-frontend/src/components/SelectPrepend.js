import React from 'react'
import { Col, Form, InputGroup, Row } from 'react-bootstrap'


const SelectPrepend = ({label, firstControl, secondControl, firstOptions, secondOptions, secondUnit}) => {

  return (
    <Row className="form-row">
      <Col md={6} xs={4}><Form.Label>{label}</Form.Label></Col>
      <Col md={6} xs={8}>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
          </InputGroup.Prepend>
          <Form.Control name={firstControl} as="select" className="select-dark">
            {firstOptions.map(item =>
              <option key={item}>{item}</option>
            )}
          </Form.Control> : 
          <Form.Control name={secondControl} as="select" className="select-dark">
            {secondOptions.map(item =>
              <option key={item}>{item}</option>
            )}
          </Form.Control>
        </InputGroup>
      </Col>
    </Row>
  )
}

export default SelectPrepend