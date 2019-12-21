import React, { useState } from 'react'
import { connect } from 'react-redux'
import Headline from './Headline'
import Setting from './Setting'
import { Button } from 'react-bootstrap'

import { createNewSettings } from '../reducers/settingsReducer'


const SettingsMenu = (props) => {
  const [ageModal, setAgeModal] = useState(false)
  const [heightModal, setHeightModal] = useState(false)
  const [weightModal, setWeightModal] = useState(false)
  const [age, setAge] = useState(30)
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [currentAge, setCurrentAge] = useState(30)
  const [currentHeight, setCurrentHeight] = useState(170)
  const [currentWeight, setCurrentWeight] = useState(70)


  const createSettings = async (event) => {
    event.preventDefault()
    props.createNewSettings(age, weight, height)
    setAge(30)
    setHeight(170)
    setWeight(70)
  }

  const handleSettingAge = (event) => {
    event.preventDefault()
    setAge(event.target.value)
  }

  const handleSettingHeight = (event) => {
    event.preventDefault()
    setHeight(event.target.value)
  }

  const handleSettingWeight = (event) => {
    event.preventDefault()
    setWeight(event.target.value)
  }

  const handleSettingCurrentAge = (event) => {
    event.preventDefault()
    setCurrentAge(age)
    setAgeModal(false)
  }

  const handleSettingCurrentHeight = (event) => {
    event.preventDefault()
    setCurrentHeight(height)
    setHeightModal(false)
  }

  const handleSettingCurrentWeight = (event) => {
    event.preventDefault()
    setCurrentWeight(weight)
    setWeightModal(false)
  }

  const createOptions = (start, end) => {
    const array = new Array(end-start)
    for (let i = start; i <= end; i++) {
      array.push(i)
    }
    return array
  }

  let ageOptions = createOptions(10,100)
  let weightOptions = createOptions(40,150)
  let heightOptions = createOptions(100,220)

  return (
    <div className="container">
      <Headline text="Set profile"></Headline>
      <Setting
        value={age}
        currentValue={currentAge}
        onChange={handleSettingAge}
        onSubmit={handleSettingCurrentAge}
        visible={setAgeModal}
        modal={ageModal}
        label="Age : "
        options={ageOptions}
      ></Setting>
      <Setting
        value={height}
        currentValue={currentHeight}
        onChange={handleSettingHeight}
        onSubmit={handleSettingCurrentHeight}
        visible={setHeightModal}
        modal={heightModal}
        label="Height (cm) : "
        options={heightOptions}
      ></Setting>
      <Setting
        value={weight}
        currentValue={currentWeight}
        onChange={handleSettingWeight}
        onSubmit={handleSettingCurrentWeight}
        visible={setWeightModal}
        modal={weightModal}
        label="Weight (kg) : "
        options={weightOptions}
      ></Setting>
      <Button onClick={createSettings} variant="save">Save</Button>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, { createNewSettings })(SettingsMenu)