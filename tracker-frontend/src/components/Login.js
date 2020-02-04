import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { handleLogin } from '../reducers/loginReducer'


const Login = (props) => {

  const loginUser = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.handleLogin(username, password)
  }
  
  return (
    <div>
    <h2>Sporttivartti</h2>
      <h4>Login</h4>
      <Form onSubmit={loginUser}>
        <Row className="form-row">
          <Col>
            <Form.Label>Username</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" name="username" />       
          </Col>
        </Row>
        <Row className="form-row">
          <Col>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" type="password" name="password" />       
          </Col>
        </Row>
          <Button className="btn-save" type="submit">login</Button>
          <Button className="btn-cancel">cancel</Button>
      </Form>
      <Link to="/newAccount">
        <p className="green">Create new account</p>
      </Link>
    </div>
  )
}

export default connect(null, { handleLogin })(Login)