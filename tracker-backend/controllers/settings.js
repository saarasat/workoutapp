const jwt = require('jsonwebtoken')
const settingsRouter = require('express').Router()
const Settings = require('../models/settings')
const User = require('../models/user')

settingsRouter.get('/', async (request, response) => {


  const token = getTokenFrom(request)
  let user = ''
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    user = await User.findById(decodedToken.id)

  } catch(exception) {
    next(exception)
  }
  const settings = await Settings.find({userId : user.id}).populate('user', { username: 1, name: 1, userId: 1 })  
  response.json(settings.map(settings => settings.toJSON()))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

settingsRouter.post('/', async (request, response, next) => {

  const body = request.body
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
  

  const user = await User.findById(decodedToken.id)

  if (body.height === undefined || body.weight === undefined) {
    return response.status(400).json({
      error: 'Settings missing'
    })
  }
  const settings = new Settings({
    weight: body.weight,
    height: body.height,
    userId: user._id
  })

  const savedSettings = await settings.save()
  user.settings = user.settings.concat(savedSettings._id)
  await user.save()
  response.json(savedSettings.toJSON())
  } catch(exception) {
    next(exception)
  }
})

module.exports = settingsRouter