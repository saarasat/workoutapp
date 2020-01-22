import axios from 'axios'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
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

const update = (value, id, newObject) => {
  return axios.put(`/api/${value}/${id}`, newObject)
}

export default {
  getAll: getAll,
  create: create,
  update: update,
  setToken: setToken
}