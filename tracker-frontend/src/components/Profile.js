import React from 'react'
import { connect } from 'react-redux'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { createOptions } from './Units'
import { createNewSettings } from '../reducers/settingsReducer'


const Profile = (props) => {

  const createSettings = async (event) => {
    event.preventDefault()
    const age = event.target.age.value
    const weight = event.target.weight.value
    const height = event.target.height.value
    props.createNewSettings(age, weight, height)
  }

  let ageOptions = createOptions(10,100)
  let weightOptions = createOptions(40,150)
  let heightOptions = createOptions(100,220)

  return (
    <div className="container">
      <h1>Set profile</h1>
      <div className="container">
        <Form onSubmit={createSettings}>
          <Row>
            <Col size="mb-4"><Form.Label>Age</Form.Label></Col>
            <Col>
              <Form.Control name="age" as="select" default="4">
                {ageOptions.map(value =>
                  <option key={value}>{value}</option>
                )}
              </Form.Control>
            </Col>
          </Row> 
          <br></br>
          <Row>
            <Col><Form.Label>Height</Form.Label></Col>
            <Col>
            <Form.Control name="height" as="select">
            {heightOptions.map(value =>
              <option key={value}>{value}</option>
            )}
            </Form.Control>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col><Form.Label>Weight</Form.Label></Col>
            <Col>
              <Form.Control name="weight" as="select">
              {weightOptions.map(value =>
                <option key={value}>{value}</option>
              )}
              </Form.Control>
            </Col>
          </Row>
          <button type="submit" className="button-save">Save</button>
        </Form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    settings: state.settings
  }
}

export default connect(mapStateToProps, { createNewSettings })(Profile)