import React from 'react';
import ReactDOM from 'react-dom';

export const CurrentLocation = (props) => {
  const {lat, lng} = props.initialCenter
  this.state = {
    currentLocation: {
      lat: lat,
      lng: lng
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== props.google) {
      this.loadMap()
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap()
    }
  }
  recenterMap() {
    const map = this.map
    const current = this.state.currentLocation

    const google = this.props.google
    const maps = google.maps

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng)
      map.panTo(center)
    }
  }
}

export default CurrentLocation

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};