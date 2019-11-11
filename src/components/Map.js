
import React from 'react'
import Location from './Location'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'


const dotenv = require('dotenv')
dotenv.config()


const mapStyles = {
  map: {
    position: 'relative',
    height: '100%',
    width: '100%',
  }
}


const NewMap = (props) => {

  return (
    <div>
      <Map 
        google={props.google}
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

const API_KEY = process.env.API_KEY
console.log(API_KEY)
export default GoogleApiWrapper({ apiKey: '' })(NewMap)