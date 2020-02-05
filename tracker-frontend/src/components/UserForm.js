import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'

const UserForm = ({createNewUser, setNotification}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (confirmPassword != password) {
      setNotification("Passwords must match")
      setPassword('')
      setConfirmPassword('')
      return
    }
    await createNewUser(username, password)
    setUsername('')
    setPassword('')
    setConfirmPassword('')
    
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }



  return (
    <div>
    <h2>Sporttivartti</h2>
      <h4>Create new account</h4>
      <Form onSubmit={handleSubmit}>
        <Row className="form-row">
          <Col>
            <Form.Label>Username</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" onChange={handleUsernameChange} value={username} name="username"  />       
          </Col>
        </Row>
        <Row className="form-row">
          <Col>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" onChange={handlePasswordChange} value={password} name="password" type="password" />       
          </Col>
        </Row>
        <Row className="form-row">
          <Col>
            <Form.Label>Password again</Form.Label>
          </Col>
          <Col>
            <Form.Control className="dark" onChange={handleConfirmPasswordChange} value={confirmPassword} name="confirmPassword" type="password" />       
          </Col>
        </Row>
          <Button className="btn-save" type="submit">create account</Button>
          <Link to="/login">
          <Button className="btn-cancel">cancel</Button>
          </Link>
      </Form>
      <Notification />
    </div>
  )
}

export default connect(null, {setNotification})(UserForm)