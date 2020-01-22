import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getIcon } from './Sports'

const MenuItem = ({ type }) => {

  return (
    <>
      <Card.Header className="menu-header">
        <Link to={`/training/${type}`}>
          <Row>
            <Col xs={3}>{getIcon(type)}</Col>
            <Col className="menu-sport">{type}</Col>
          </Row>
        </Link>
      </Card.Header>  
    </>
  )
}

export default MenuItem