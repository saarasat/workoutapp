import axios from 'axios'


const getAll = async (value) => {
  const response = await axios.get(`/api/${value}`)
  return response.data
}

const create = async (value, newObject) => {
  const response = await axios.post(`/api/${value}`, newObject)
  console.log(response)
  return response.data
}

const update = (value, id, newObject) => {
  return axios.put(`/api/${value}/${id}`, newObject)
}

export default {
  getAll: getAll,
  create: create,
  update: update
}