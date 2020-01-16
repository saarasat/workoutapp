import React from 'react'
import { types } from './Sports'
import MenuItem from './MenuItem'

const Home = () => {
  return (
    <div className="container">
      <h1>Add Workout</h1>
      <div>
      {types.map(item => 
        <MenuItem key={item.type} type={item.type} 
        icon={item.icon} 
        />
      )}
      </div>
    </div>
  )
}

export default Home