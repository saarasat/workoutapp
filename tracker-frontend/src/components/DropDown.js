import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

const DropDown = ({options, value, label, onChange, hide }) => {

  
  return (
      <Row className="form-row">
        <Col xs={6} className="form-col"><Form.Label>{label}</Form.Label></Col>
        <Col xs={4} >
          <Form.Control onChange={onChange} plaintext={true} className="form-control-profile" name={value} as="select">
            {options.map(option =>
            <option key={option}>{option}</option>
            )}
          </Form.Control>
        </Col>
        <Col xs={2} className="form-col">
          <button className="btn-icon logout" onClick={hide} >
          <Icon icon={faUndoAlt} color="gray" ></Icon></button>
        </Col>
      </Row> 
  )
}

export default DropDown
