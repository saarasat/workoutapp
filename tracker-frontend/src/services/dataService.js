import axios from 'axios'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const destroyToken = () => {
  token = null
}

const getAll = async (value) => {
  const response = await axios.get(`/api/${value}`)
  return response.data
}

const create = async (value, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(`/api/${value}`, newObject, config)
  return response.data
}

const replace = async (value, id, newObject) => {
  console.log(value)
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`/api/${value}/${id}`, newObject, config)
  return response.data
}

const deleteOne = async (value, id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`/api/${value}/${id}`, config)
  let workouts = ''
  if (response.status === 204) {
    workouts = getAll(value)
  }
  return workouts
}


export default {
  getAll: getAll,
  create: create,
  update: replace,
  delete: deleteOne,
  setToken: setToken
}