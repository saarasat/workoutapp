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
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)

  const createSettings = async (event) => {
    event.preventDefault()
    props.createNewSettings(age, weight, height)
    setAgeModal(false)
    setHeightModal(false)
    setWeightModal(false)
  }

  const createOptions = (start, end) => {
    const array = new Array(end-start)
    for (let i = start; i <= end; i++) {
      array.push(i)
    }
    return array
  }

  let ageOptions = createOptions(1,100)
  let weightOptions = createOptions(40,140)
  let heightOptions = createOptions(100,220)

  return (
    <div className="container">
      <Headline text="Set profile"></Headline>
      <Setting visible={setAgeModal} modal={ageModal} label="Age : " options={ageOptions}></Setting>
      <Setting visible={setHeightModal} modal={heightModal} label="Height (cm) : " options={heightOptions}></Setting>
      <Setting visible={setWeightModal} modal={weightModal} label="Weight (kg) : " options={weightOptions}></Setting>
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