import React from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'


const Setting = ({ setModalVisible, modalToShow, setValue, nameOfValue, labelForValue, currentValue, valuesForSelect }) => {

  return (
    <div className="container">
      <Card.Header as={Row} onClick={() => setModalVisible(true)}>
        <Col>{labelForValue}</Col>
        <Col>{currentValue ? currentValue.age : 0}</Col>
      </Card.Header>
      <Modal show={modalToShow} onHide={() => setModalVisible(false)} centered area-labelledby="first">
        <Form onSubmit={setValue}>
          <Modal.Header closeButton>
            <Form.Group as={Row} controlId={labelForValue}>
              <Col md={8}>
                <Form.Label>{labelForValue}</Form.Label>
              </Col>
              <Col md={4}>
                <Form.Control name={nameOfValue} as="select">
                  {valuesForSelect.map(age =>
                    <option key={age}>{age}</option>
                  )}
                </Form.Control>
              </Col>
            </Form.Group>
          </Modal.Header>
          <Modal.Footer className="justify-content-center">
            <Button onClick={() => setModalVisible(false)} variant="secondary">Cancel</Button>
            <Button type="submit" variant="save">Save changes</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default Setting

