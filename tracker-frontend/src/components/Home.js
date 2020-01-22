import React from 'react'
import { types } from './Sports'
import MenuItem from './MenuItem'

const Home = () => {

  return (
    <div className="container">
      <h1>Add a workout</h1>
      <div className="container">
        {types.map(item => 
        <div key={item.type}>
          <MenuItem key={item.type} type={item.type} />
        </div>
        )}
      </div>
    </div>
  )
}

export default Home