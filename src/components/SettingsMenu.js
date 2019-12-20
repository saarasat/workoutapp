import React, { useState } from 'react'
import { connect } from 'react-redux'
import Headline from './Headline'
import Setting from './Setting'
import { createNewSettings } from '../reducers/settingsReducer'


const SettingsMenu = (props) => {
  const [ageShow, setAgeShow] = useState(false)
  const [heightShow, setHeightShow] = useState(false)
  const [weightShow, setWeightShow] = useState(false)

  const createSettings = async (event) => {
    event.preventDefault()
    const newAge = event.target.age.value
    const newHeight = event.target.height.value
    const newWeight = event.target.weight.value
    const newSettings = {age: newAge, weight: newWeight, height: newHeight}
    props.createNewSettings('settings', newSettings)
    setAgeShow(false)
    setHeightShow(false)
    setWeightShow(false)
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
      <Setting setModalVisible={setAgeShow} modalToShow={ageShow} nameOfValue="age" labelForValue="Age : " valuesForSelect={ageOptions} currentValue={30}></Setting>
      <Setting setModalVisible={setHeightShow} modalToShow={heightShow} nameOfValue="height" labelForValue="Height (cm) : " valuesForSelect={heightOptions} currentValue={170}></Setting>
      <Setting setModalVisible={setWeightShow} modalToShow={weightShow} nameOfValue="weight" labelForValue="Weight (kg) : " valuesForSelect={weightOptions} currentValue={70}></Setting>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    settings: state.settings
  }
}
export default connect(mapStateToProps, { createNewSettings })(SettingsMenu)