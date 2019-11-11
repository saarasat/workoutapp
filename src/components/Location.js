import { useEffect, useState } from 'react'

const Location = () => {
  const [position, setPosition] = useState({})
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