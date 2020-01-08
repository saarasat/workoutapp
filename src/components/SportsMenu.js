import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'



const SportsMenu = () => {

  return (

    <Container>
      <Row>
        <Col>Running</Col>
        <Col>Cycling</Col>
        <Col>Gym</Col>
      </Row>
      <Row>
        <Col>Classes</Col>
        <Col>Ball games</Col>
        <Col>Winter sports</Col>
      </Row>
      <Row>
        <Col>Combat sports</Col>
        <Col>Yoga and stretching</Col>
        <Col>Water sports</Col>
      </Row>
      <Row>
        <Col>Outdoor sports</Col>
        <Col>Yoga and stretching</Col>
        <Col>Everyday activities</Col>
      </Row>
      <Row>
        <Col>Training with animals</Col>
      </Row>
    </Container>

  )
}

export default SportsMenu

