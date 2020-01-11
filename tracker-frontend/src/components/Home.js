import React from 'react'
import { types } from './Sports'
import MenuItem from './MenuItem'
import Headline from './Headline'

const Home = () => {
  return (
    <div className="container">
      <Headline>Add a workout</Headline>
      {types.map(item => 
        <MenuItem key={item.type} type={item.type} 
        icon={item.icon} 
        />
      )}
    </div>
  )
}

export default Home