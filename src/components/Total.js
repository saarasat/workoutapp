import React from 'react'


const Total = ({ values, time, measurement }) => {

  const countTotal = () => {
    return values.reduce((total, currentValue) => total + Number(currentValue.time),0)
  }

  return (
    <div className="container">
      {time} {values ? countTotal() : 0} {measurement}
    </div>
  )

}


export default Total