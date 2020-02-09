import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon'

const DropDown = ({options, value, label, onChange, hide }) => {

  return (
      <Row className="form-row">
        <Col xs={5} className="form-col"><Form.Label>{label}</Form.Label></Col>
        <Col xs={5} >
          <Form.Control onChange={onChange} plaintext={true} className="select-dark" name={value} as="select">
            {options.map(option =>
            <option key={option}>{option}</option>
            )}
          </Form.Control>
        </Col>
        <Col xs={2} className="form-col">
          <button className="btn-undo" onClick={hide} >
          <Icon icon={faUndoAlt} color="gray" ></Icon></button>
        </Col>
      </Row> 
  )
}

export default DropDown
