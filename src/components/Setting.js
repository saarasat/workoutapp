import React from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'


const Setting = ({ onChange, onSubmit, visible, modal, label, currentValue, options, value }) => {


  return (
    <div className="container">
      <Card.Header as={Row} onClick={() => visible(true)}>
        <Col>{label}</Col>
        <Col>{currentValue}</Col>
      </Card.Header>
      <Modal show={modal} onHide={() => visible(false)} centered>
        <Form className="justify-content-center" onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Row>
              <Col>
                <Form.Label>{label}</Form.Label>
              </Col>
              <Col md={8}>
                <Form.Control onChange={onChange} name="age" value={value} as="select">
                  {options.map(option =>
                    <option key={option}>{option}</option>
                  )}
                </Form.Control>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Footer className="justify-content-center">
            <Button onClick={() => visible(false)} variant="secondary">Cancel</Button>
            <Button type="submit" variant="save">Ok</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Setting

