import axios from 'axios'

const baseUrl = 'http://localhost:3002/api'

const getAll = async (value) => {
  const response = await axios.get(`${baseUrl}/${value}`)
  return response.data
}

const create = async (value, newObject) => {
  const response = await axios.post(`${baseUrl}/${value}`, newObject)
  return response.data
}

const update = (value, id, newObject) => {
  return axios.put(`${baseUrl}/${value}/${id}`, newObject)
}

export default {
  getAll: getAll,
  create: create,
  update: update
}