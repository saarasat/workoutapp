import React from 'react'


const Total = ({ array, time, measurement }) => {

  const countTotal = () => {
    return array.reduce((total, currentValue) => total + Number(currentValue.time),0)
  }

  return (
    <div className="container">
      {time} {array ? countTotal() : 0} {measurement}
    </div>
  )

}


export default Total