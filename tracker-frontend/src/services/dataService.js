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

const getAll = async (value) => {
  const response = await axios.get(`/api/${value}`,  getConfig())
  return response.data
}

const create = async (value, newObject) => {
  const response = await axios.post(`/api/${value}`, newObject, getConfig())
  return response.data
}

const replace = async (value, newObject, id) => {
  const response = await axios.put(`/api/${value}/${id}`, newObject, getConfig())
  return response.data
}

const addItem = async (value, id, item, moves) => {
  console.log(moves)
  const response = await axios.post(`/api/programs/${id}/moves`, moves, getConfig())
  console.log(response.data)
  return response.data
}

const updateItem = async (value, id, item, moves) => {
  console.log(moves)
  const response = await axios.put(`/api/programs/${id}/moves`, moves, getConfig())
  console.log(response)
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
  getAll: getAll,
  create: create,
  addItem: addItem,
  updateItem: updateItem,
  update: replace,
  delete: deleteOne,
  setToken: setToken,
  destroyToken: destroyToken
}