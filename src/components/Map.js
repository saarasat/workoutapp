import React from 'react'
import { Map } from 'google-maps-react'


const mapStyles = {
  map: {
    height: '80%',
    width: '80%'
  }
}

const NewMap = ({ google }) => {

  return (
    <div className="container">
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 60.175,
          lng: 24.941
        }}
      > 
      </Map>
    </div>
  )
}

export default NewMap