import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Calendar from 'react-calendar'

import { Alert, Button, Card, Col, Form, Modal, ModalBody, Row, ProgressBar } from 'react-bootstrap'
import { createOptions } from './Units'
import { createNewSettings, updateSettings, deleteSettings } from '../reducers/settingsReducer'
import { handleLogout } from '../reducers/loginReducer'
import { deleteUser } from '../reducers/usersReducer'
import { weightGraphOptions } from '../utils/graphOptions'
import DropDown from './DropDown'
import Notification from './Notification'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { setNotification } from '../reducers/notificationReducer'


const Profile = (props) => {
  const [visible, setVisible] = useState(false)
  const [showHeight, setShowHeight] = useState(true)
  const [showWeight, setShowWeight] = useState(true)
  const [show, setShow] = useState(true)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [workoutDate, setWorkoutDate] = useState(new Date()) 
  const [data, setData] = useState([])
  const [bmi, setBmi] = useState(0)
  console.log(props.settings)

  useEffect(() => {
    if (props.settings.length > 0) {
      setHeight(props.settings[props.settings.length-1].height)
      setWeight(props.settings[props.settings.length-1].weight)
      setData(props.settings.map(setting => ({x: setting.date, y: setting.weight})))
      setBmi(countBMI())
      
    }
  },[props.settings])

  const findWeights = () => {
    const weights = props.settings.map(setting => (setting.weight))
    console.log(weights)
    return weights
  }

  const handleDeletion = (id) => {
    props.deleteSettings(id)
  }

  const countBMI = () => {
    console.log(data)
    const bmi = Number(weight / ((height/100)*(height/100))).toFixed(1)
    if (bmi < 17) return (<h4 className="orange">{bmi} Underweight</h4>)
    if (bmi >= 17 && bmi < 18.5) return (<h4 className="yellow">{bmi} Underweight</h4>)
    if (bmi >= 18.5 && bmi < 25) return (<h4 className="green">{bmi} Normal weight</h4>)
    if (bmi >= 25 && bmi < 30) return (<h4 className="orange">{bmi} Overweight</h4>)
    if (bmi >= 30) return (<h4 className="dark-red">{bmi} Obese</h4>)
  }
  const options = {

    title: {
      text: 'Weight',
      style: {
        color: '#FFFFFF',
      }
    },
    chart: {
      height: '80%',
      backgroundColor: '#212529'
    },
    credits: {
      text: ''
    },
    yAxis: {
      title: {
        text: false, 
      },
      floor: 40,
      labels: {
        style: {
        color: '#FFFFFF'
        }
      }
    },
    xAxis: {
      title: {
        text: false,
      },
      type: 'datetime',
      dateTimeLabelFormats: {
          day: '%e %b'
      },
      labels: {
        style: {
        color: '#FFFFFF'
        }
      },
      style: {
        color: '#FFFFFF'
      }
    },
    legend: false,
    series: [{
      data: data.length > 0 ? data : 0,
      pointIntervalUnit: 'week',
      lineColor: '#00bf8a',
      lineWidth: 4,
      color: '#00bf8a',
      showInLegend: false,
      name: 'weight',
      point: {
        events: {
            click: function () {
                if (this.series.data.length > 1) {
                    return (
                      <Alert variant="light" onClose={() => setShow(false)} dismissible>
                        Do you want to remove this weight?
                        <div className="d-flex justify-content-end">
                          <Button onClick={handleDeletion(this.id)} variant="outline-success">
                            
                          </Button>
                        </div>
                      </Alert>
                    )
                }
            }
        }
    }
    }],
  }

 
  const createSettings = async (event) => {
    const dateToSave = props.settings.find(setting => 
      (setting.date.getDate() === workoutDate.getDate() 
      && setting.date.getMonth() === workoutDate.getMonth()
      && setting.date.getFullYear() === workoutDate.getFullYear()))
    
    console.log(dateToSave)
    event.preventDefault()
    if (weight === 0) {
      props.setNotification('Weight required')
      return
    }
    if (height === 0) {
      props.setNotification('Height required')
      return
    }
    if (dateToSave) {
      const newSettings = {weight: weight, height: height, date: dateToSave.date}
      await props.updateSettings(dateToSave.id, newSettings)
    }
    else {
      await props.createNewSettings(weight, height, workoutDate)
    }
    setShow(!show)

  }
    

  const handleHeightChange = (event) => {
    setHeight(event.target.value)
    setShowHeight(!showHeight)

  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value)
    setShowWeight(!showWeight)
  }

  const removeUser = async (event) => {
    await props.deleteUser(props.user)
    handleLogout()
  }



  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="container">
        <Form onSubmit={createSettings}>
          <Row className="form-date" onClick={() => setVisible(true)}>
            Date:  {workoutDate.getDate() + "." + (workoutDate.getMonth()+1) + "." + workoutDate.getFullYear()} </Row>
          <Modal show={visible} onHide={() => setVisible(false)}> 
          <ModalBody>
            <div>
              <Calendar onClickDay={(returnValue, event) => setWorkoutDate(returnValue)} />
            </div>
          </ModalBody>              
          <Modal.Footer className="justify-content-center">
            <Button onClick={() => setVisible(false)} variant="secondary">Cancel</Button>
            <Button onClick={() => setVisible(false)} variant="save"> Ok</Button>
          </Modal.Footer>
          </Modal>
          {showHeight ? <Card.Header onClick={() => setShowHeight(!showHeight)}>
            Height: {height !== 0 ? height + " cm" : "Not yet defined"} </Card.Header> 
          : <DropDown placeholder={weight} onChange={handleHeightChange} workoutDate={workoutDate} options={createOptions(100,220)} value="height" label="Height"/>}
          {showWeight ? <Card.Header onClick={() => setShowWeight(!showWeight)}>
            Weight: {weight !== 0 ? weight + " kg" : "Not yet defined"} </Card.Header> 
          : <DropDown  onChange={handleWeightChange} options={createOptions(40,200)} value="weight" label="Weight"/>}
          <div className="container">
          <Button type="submit" className="btn-save">Save</Button>
          </div>
        </Form>
        <Notification />
        </div>
        <div className="container">          
          <HighchartsReact
            className="weight-graph"
            highcharts={Highcharts}
            constructorType={'chart'}
            options={options}
          />
          </div>
          <div className="container">
            {height > 0 && weight > 0 ?  
            <>
            <h4>BMI: </h4>
            {countBMI()}
            </>
            : null}
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

export default connect(mapStateToProps, { deleteUser, deleteSettings, updateSettings, handleLogout, createNewSettings, setNotification })(Profile)