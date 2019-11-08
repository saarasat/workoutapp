import { useEffect, useState } from 'react'
/*
const distanceCalculator = () => {
  const r = 6731
  const lat1 = 60.169857
  const lat2 = 65.012093
  const lon1 = 24.938379
  const lon2 = 25.465076
  const distLat = (lat2-lat1)*Math.PI/180
  const distLon = (lon2-lon1)*Math.PI/180
  const alfa = Math.sin(distLat / 2) * Math.sin(distLat /2)
  + Math.cos(lat1)*Math.cos(lat2)*Math.sin(distLon/2)*Math.sin(distLon/2)
  let c = 2*Math.atan2(Math.sqrt(alfa), Math.sqrt(1-alfa))
  const d = r*c
  return d
} 
*/
const Location = () => {
  const [position, setPosition] = useState({})
  const [distance, setDistance] = useState(0)
  const [error, setError] = useState(null)
  const geoOptions = { enableHighAccuracy: true }


  const onChange = ({ coords }) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }
  const onError = (error) => {
    setError(error.message)
  }


  useEffect(() => {
    const geo = navigator.geolocation
    if (!geo) {
      setError('Geolocation is not supported')
      return
    }

    const watcher = geo.watchPosition(onChange, onError, geoOptions)
    setTimeout(() => {
      geo.clearWatch(watcher)
    }, 15000)
  }, [])


  return { ...position, error }
}

export default Location