import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import { createOptions } from './Units'
import { createNewSettings } from '../reducers/settingsReducer'
import DropDown from './DropDown'


const Profile = (props) => {
  const [showAge, setShowAge] = useState(true)
  const [showHeight, setShowHeight] = useState(true)
  const [showWeight, setShowWeight] = useState(true)
  const [age, setAge] = useState(0)
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
 
  const createAgeSettings = async (event) => {
    event.preventDefault()
    const newAge = event.target.age.value  
    props.createNewSettings(newAge, weight, height)
    setAge(newAge)
    console.log(age)
    setShowAge(true)
  }

  const createHeightSettings = async (event) => {
    event.preventDefault()
    const newHeight = event.target.height.value
    props.createNewSettings(age, weight, newHeight)
    setHeight(newHeight)
    setShowHeight(true)
  }
  const createWeightSettings = async (event) => {
    event.preventDefault()
    const newWeight = event.target.weight.value
    props.createNewSettings(age, newWeight, height)
    setWeight(newWeight)
    setShowWeight(true)
  }

  useEffect(() => {
    if (props.settings.length > 0) {
      setAge(props.settings[props.settings.length-1].age)
      setHeight(props.settings[props.settings.length-1].height)
      setWeight(props.settings[props.settings.length-1].weight)
    }
  },[props.settings])

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="container">
          {showAge ? <Card.Header onClick={() => setShowAge(false)}>
            Age: {age !== 0 ? age : "Not yet defined"} </Card.Header> 
          : <DropDown onSub={createAgeSettings} options={createOptions(10,100)} value="age" label="Age" setShow={() => setShowAge(true)}/>}        
          {showHeight ? <Card.Header onClick={() => setShowHeight(false)}>
            Height: {height !== 0 ? height + " cm" : "Not yet defined"} </Card.Header> 
          : <DropDown onSub={createHeightSettings} options={createOptions(100,220)} value="height" label="Height"/>}
          {showWeight ? <Card.Header onClick={() => setShowWeight(false)}>
            Weight: {weight !== 0 ? weight + " kg" : "Not yet defined"} </Card.Header> 
          : <DropDown onSub={createWeightSettings} options={createOptions(40,200)} value="weight" label="Weight"/>}
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