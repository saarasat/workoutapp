import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'


const Login = ({
   handleSubmit,
   handleUsernameChange,
   handlePasswordChange,
   handleCancel,
   username,
   password
  }) => {

  return (
    <div>
    <h2>Sporttivartti</h2>
      <h4>Login</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="form-row">
          <Col>
            <Form.Label>Username</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" value={username} onChange={handleUsernameChange} />       
          </Col>
        </Row>
        <Row className="form-row">
          <Col>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" type="password" value={password} onChange={handlePasswordChange} />       
          </Col>
        </Row>
          <Button className="btn-save" type="submit">login</Button>
          <Button className="btn-cancel" onClick={handleCancel}>cancel</Button>
      </Form>
    </div>
  )
}

export default Login