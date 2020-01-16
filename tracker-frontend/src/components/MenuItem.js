import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const MenuItem = ({ type, icon, sports }) => {

  return (
    <>
      <Card bg="dark" >
        <Card.Header className="menu-header">
          <Link to={`/training/${type}`}>
            <Row>
            <Col xs={3}><i className={icon}></i></Col>
            <Col className="menu-sport">{type}</Col>
            </Row>
            </Link>
        </Card.Header>
      </Card>
    </>
  )
}


export default MenuItem