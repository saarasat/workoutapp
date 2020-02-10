import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { handleLogin } from '../reducers/loginReducer'
import Notification from './Notification'


const Login = (props) => {

  const loginUser = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    props.handleLogin(username, password)
    props.history.push("/")
  }

  const onCancel = () => {
    props.history.push("/login")
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
          <Button className="btn-save" variant="dark" type="submit">login</Button>
          <Button className="btn-cancel" variant="dark" onClick={onCancel}>cancel</Button>
      </Form>
      <Link to="/newAccount">
        <h5 className="login green">Create a new account</h5>
      </Link>
      <div className="container">
        <Notification />
      </div>
    </div>
  )
}

export default withRouter(connect(null, { handleLogin })(Login))