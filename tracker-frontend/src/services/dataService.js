import axios from 'axios'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const destroyToken = () => {
  token = null
}

const getConfig = () => ({
  headers: { Authorization: token }
})

const getAllUsers = async () => {
  const response = await axios.get(`/api/users`)
  return response.data
}

const deleteUser = async (user) => {
  
  const response = await axios.delete(`/api/users/`, getConfig())
}

const getAll = async (value) => {
  const response = await axios.get(`/api/${value}`, getConfig())
  return response.data
}

const create = async (value, newObject) => {
  const response = await axios.post(`/api/${value}`, newObject, getConfig())
  return response.data
}

const replace = async (value, id, newObject) => {
  const response = await axios.put(`/api/${value}/${id}`, newObject, getConfig())
  console.log(response.data)
  return response.data
}

const deleteOne = async (value, id) => {
  const response = await axios.delete(`/api/${value}/${id}`, getConfig())
  let workouts = ''
  if (response.status === 204) {
    workouts = getAll(value)
  }
  return workouts
}

export default {
  getAllUsers : getAllUsers,
  getAll: getAll,
  create: create,
  update: replace,
  delete: deleteOne,
  setToken: setToken,
  destroyToken: destroyToken
}