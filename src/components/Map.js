import React from 'react'
import { Map, Marker } from 'google-maps-react'
import Location from './Location'


const mapStyles = {
  map: {
    width: '80%',
    height: '80%'
  }
}

const NewMap = ({ google }) => {

  return (
    <div>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 60.175,
          lng: 24.941
        }}
      >
        <Marker position={{ lat: Location().latitude, lng: Location().longitude }}/>
      </Map>
    </div>
  )
}

export default NewMap