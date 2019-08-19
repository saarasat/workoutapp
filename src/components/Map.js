
import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { Alert } from 'react-bootstrap';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '80%'
  }
}

const NewMap = ({ google }) => {
  const [ locations, setLocation ] = useState({lat: 0, lng: 0})
  console.log(navigator.geolocation.getCurrentPosition(
    position => {
      const location = JSON.stringify(position)
      console.log(location)
      this.setState({location})
    }, error => Alert.alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  ))


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
      />
    </div>
  )
}

export default NewMap