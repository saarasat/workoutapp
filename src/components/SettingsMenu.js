import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Headline from './Headline'
import Setting from './Setting'
import { createNewWeight } from '../reducers/weightReducer'
import { createNewHeight } from '../reducers/heightReducer'
import { createNewAge } from '../reducers/ageReducer'


const SettingsMenu = (props) => {
  const [ageShow, setAgeShow] = useState(false)
  const [heightShow, setHeightShow] = useState(false)
  const [weightShow, setWeightShow] = useState(false)

  console.log(props.heights)
  console.log(props.weights)
  console.log(props.ages)

  const ages = props.ages
  const weights = props.weights
  const heights = props.heights

  const setAge = async (event) => {
    event.preventDefault()
    const newAge = event.target.age.value
    props.createNewAge('ages', newAge)
    setAgeShow(false)
  }

  const setHeight = async (event) => {
    event.preventDefault()
    const newHeight = event.target.height.value
    props.createNewHeight ('heights', newHeight)
    setHeightShow(false)
  }

  const setWeight = async (event) => {
    event.preventDefault()
    const newWeight = event.target.weight.value
    props.createNewWeight ('weights', newWeight)
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
      <Setting setModalVisible={setAgeShow} modalToShow={ageShow} setValue={setAge} nameOfValue="age" labelForValue="Age : " valuesForSelect={ageOptions} currentValue={ages ? ages[ages.length-1] : 0}></Setting>
      <Setting setModalVisible={setHeightShow} modalToShow={heightShow} setValue={setHeight} nameOfValue="height" labelForValue="Height (cm) : " valuesForSelect={heightOptions} ></Setting>
      <Setting setModalVisible={setWeightShow} modalToShow={weightShow} setValue={setWeight} nameOfValue="weight" labelForValue="Weight (kg) : " valuesForSelect={weightOptions} ></Setting>
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    ages: state.ages,
    weights: state.weights,
    heights: state.heights
  }
}
export default connect(mapStateToProps, { createNewAge, createNewHeight, createNewWeight })(SettingsMenu)