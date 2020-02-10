import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Form } from 'react-bootstrap'
import { createOptions, createWeightOptions } from './Units'
import { createNewSettings, updateSettings, deleteSettings } from '../reducers/settingsReducer'
import { handleLogout } from '../reducers/loginReducer'
import { deleteUser } from '../reducers/usersReducer'
import RemoveAlert from './RemoveAlert'
import CalendarModal from './CalendarModal'
import DropDown from './DropDown'
import WeightGraph from './WeightGraph'
import Notification from './Notification'
import { setNotification } from '../reducers/notificationReducer'


const Profile = (props) => {
  const [calendarVisible, setCalendarVisible] = useState(false)
  const [showHeight, setShowHeight] = useState(false)
  const [showWeight, setShowWeight] = useState(false)
  const [show, setShow] = useState(true)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [settingsDate, setSettingsDate] = useState(new Date())
  const [data, setData] = useState([])

  useEffect(() => {
    if (props.settings.length > 0) {
      setHeight(props.settings[props.settings.length-1].height)
      setWeight(props.settings[props.settings.length-1].weight)
      setData(props.settings.map(setting => ({x: setting.date, y: setting.weight})))
    }
  },[props.settings])

  const handleDeletion = (userId) => {
    props.updateSettings(userId, )
  }

  const countBMI = () => {
    const bmi = Number(weight / ((height/100)*(height/100))).toFixed(1)
    if (bmi < 17) return (<h4 className="orange">BMI {bmi} Underweight</h4>)
    if (bmi >= 17 && bmi < 18.5) return (<h4 className="yellow">BMI {bmi} Underweight</h4>)
    if (bmi >= 18.5 && bmi < 25) return (<h4 className="green">BMI {bmi} Normal weight</h4>)
    if (bmi >= 25 && bmi < 30) return (<h4 className="orange">BMI {bmi} Overweight</h4>)
    if (bmi >= 30) return (<h4 className="dark-red">BMI {bmi} Obese</h4>)
  }

  
  const createSettings = async (event) => {
    event.preventDefault()

    const dateToSave = props.settings.find(setting => 
      (setting.date.getDate() === settingsDate.getDate() 
      && setting.date.getMonth() === settingsDate.getMonth()
      && setting.date.getFullYear() === settingsDate.getFullYear()))
  
    if (weight === 0 || height == 0) {
      props.setNotification('Height and weight required')
      return
    }
    if (dateToSave) {
      const newSettings = {weight: weight, height: height, date: dateToSave.date}
      await props.updateSettings(dateToSave.id, newSettings)
      setData(props.settings.map(setting => ({x: setting.date, y: setting.weight})))      
    }
    else {
      await props.createNewSettings(weight, height, settingsDate)
      setData(props.settings.map(setting => ({x: setting.date, y: setting.weight})))
    }
    setShow(!show)
  } 

  const handleHeightChange = (event) => {
    setHeight(event.target.value.slice(0, -3))
    setShowHeight(!showHeight)
  }

  const handleWeightChange = (event) => {
    setWeight(event.target.value.slice(0, -3))
    setShowWeight(!showWeight)
  }

  const removeUser = async () => {
    const id = props.user.userId
    await props.deleteUser(id)
    props.handleLogout()
  }

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="container">
        <Form onSubmit={createSettings}>
          <Card.Header className="profile-form-header" onClick={() => setCalendarVisible(true)}>
            Date:  {settingsDate.getDate() + "." + (settingsDate.getMonth()+1) + "." + settingsDate.getFullYear()} </Card.Header>
            <CalendarModal
              visible={calendarVisible}
              hide={() => setCalendarVisible(false)}
              setDate={setSettingsDate}
            />
          {!showHeight ? <Card.Header className="profile-form-header" onClick={() => setShowHeight(!showHeight)}>
            Height: {height !== 0 ? height + " cm" : "Not yet defined"} </Card.Header> 
          : <DropDown hide={() => setShowHeight(false)} placeholder={weight} onChange={handleHeightChange} settingsDate={settingsDate} options={createOptions(100,220, 'cm')} value="height" label="Height"/>}
          {!showWeight ? <Card.Header className="profile-form-header" onClick={() => setShowWeight(!showWeight)}>
            Weight: {weight !== 0 ? weight + " kg" : "Not yet defined"} </Card.Header> 
          : <DropDown hide={() => setShowWeight(false)} onChange={handleWeightChange} options={createWeightOptions(40,200, 'kg')} value="weight" label="Weight"/>} 
          <Button type="submit" className="btn-save" variant="dark">Save</Button>
        </Form>
        <Notification />
      </div>
      <WeightGraph data={data} setSettingsDate={setSettingsDate}/>
      <div className="container">
        {height > 0 && weight > 0 ? <>{countBMI()}</> : null}
      </div>
      <div className="container">
        <RemoveAlert 
          confirm={removeUser} 
          buttonText="Remove account"
          buttonClass="btn-pause"
          alertText="Are you sure you want to remove all data?"
        />
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

export default connect(mapStateToProps, { deleteUser, updateSettings, handleLogout, createNewSettings, setNotification })(Profile)