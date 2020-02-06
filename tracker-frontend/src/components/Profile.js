import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Col, OverlayTrigger, Overlay, Row, Popover, ProgressBar, Tooltip } from 'react-bootstrap'
import { createOptions } from './Units'
import { createNewSettings } from '../reducers/settingsReducer'
import { handleLogout } from '../reducers/loginReducer'
import { deleteUser } from '../reducers/usersReducer'
import DropDown from './DropDown'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'


const Profile = (props) => {
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const [fifth, setFifth] = useState(false)
  const [showHeight, setShowHeight] = useState(true)
  const [showWeight, setShowWeight] = useState(true)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const findWeights = () => {
    const weights = props.settings.map(setting => setting.weight)
    return weights
  }

  Highcharts.setOptions({size: [300,300]})

  const options = {
    title: {
      text: 'Weight'
    },
    credits: {
      text: ''
    },
    yAxis: {
      title: {
        text: 'kg'
      }
    },
    xAxis: {
      title: {
        text: 'days'
      }
    },
    series: [{
      name: 'Weight',
      data: findWeights(),
    }],
    background: {
      size: [300, 300]
    }

  }

 

  const createHeightSettings = async (event) => {
    event.preventDefault()
    const newHeight = event.target.height.value
    props.createNewSettings(weight, newHeight)
    setHeight(newHeight)
    if (countBMI() > 17) setSecond(true)
    setShowHeight(true)
  }
  
  const createWeightSettings = async (event) => {
    event.preventDefault()
    const newWeight = event.target.weight.value
    props.createNewSettings(newWeight, height)
    setWeight(newWeight)
    setShowWeight(true)
  }


  const popover = () => (
    <Popover id="popover-basic">
      <Popover.Title className="dark-red" as="h3">{countBMI()}</Popover.Title>
    </Popover>
  )
    
  const removeUser = async (event) => {
    await props.deleteUser(props.user)
    handleLogout()
  }

  const countBMI = () => {
    return Math.round((weight / ((height/100)*(height*100))))
  }

  useEffect(() => {
    if (props.settings.length > 0) {
      setHeight(props.settings[props.settings.length-1].height)
      setWeight(props.settings[props.settings.length-1].weight)
    }
  },[props.settings])


  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="container">
          {showHeight ? <Card.Header onClick={() => setShowHeight(false)}>
            Height: {height !== 0 ? height + " cm" : "Not yet defined"} </Card.Header> 
          : <DropDown onSubmit={createHeightSettings} options={createOptions(100,220)} value="height" label="Height"/>}
          {showWeight ? <Card.Header onClick={() => setShowWeight(false)}>
            Weight: {weight !== 0 ? weight + " kg" : "Not yet defined"} </Card.Header> 
          : <DropDown onSubmit={createWeightSettings} options={createOptions(40,200)} value="weight" label="Weight"/>}
        </div>
        <div className="container">
          <Row>
            <Overlay show={first} placement="top" overlay={popover()}>
              <Col xs={1}></Col>
            </Overlay>
            <Overlay show={second} placement="top" overlay={popover()}>
              <Col xs={2}></Col>
            </Overlay>
            <Overlay show={third} placement="top" overlay={popover()}>
              <Col xs={5}></Col>
            </Overlay>
            <Overlay show={fourth} placement="top" overlay={popover()}>
              <Col xs={2}></Col>
            </Overlay>
            <Overlay show={fifth} placement="top" overlay={popover()}>
              <Col xs={2}></Col>
            </Overlay>
          </Row>
          <ProgressBar>
            <ProgressBar variant="secondary" label="< 16.9" now={10} key={1} />
            <ProgressBar variant="info" label="17-18.5" now={15} key={2} />
            <ProgressBar variant="success" label="18.6-24.9" now={40} key={3} />
            <ProgressBar variant="warning" label="25-29.9" now={20} key={4} />
            <ProgressBar variant="danger" label="> 30" now={15} key={5} />
          </ProgressBar>
        </div>
        <div>
          <HighchartsReact
            className="container"
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
          />

        </div>
        <div className="container">
          <Button onClick={removeUser} className="btn-pause">Remove account</Button>

        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    settings: state.settings
  }
}

export default connect(mapStateToProps, { deleteUser, handleLogout, createNewSettings })(Profile)