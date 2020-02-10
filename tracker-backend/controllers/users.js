const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')
const Settings = require('../models/settings')
const Program = require('../models/program')
const Move = require('../models/move')
const Workout = require('../models/workout')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({})
    .find({}).populate('workouts', { sport: 1, type: 1, time: 1, calories: 1, km: 1, date: 1, day: 1, month: 1 })
    .find({}).populate('settings', { height: 1, weight: 1 })
  response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response, next) => {

  try {
    const body = request.body
    if (!body.password || body.password.length < 3) {
      return response.status(400).send({
        error: 'password minimum length 3'
      })
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
      username: body.username,
      passwordHash,
      settings: [],
      workouts: [],
      programs: [],
      moves: []
    })

    const savedUser = await user.save()

    response.json(savedUser)
  } catch (exception) {
    next(exception)
  }
})

usersRouter.delete('/:id', async (request, response, next) => {

  const token = getTokenFrom(request)
  let user = ''
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    user = await User.findById(decodedToken.id)
   
    await Settings.find({userId: request.params.id}).remove()
    await Program.find({userId: request.params.id}).remove()
    await Move.find({userId: request.params.id}).remove()
    await Workout.find({userId: request.params.id}).remove()
    await User.findByIdAndRemove(request.params.id)
  
    response.status(204).end()
  } catch(exception) {
    next(exception)
  }
})


usersRouter.put('/:id', async (request, response, next) => {

  const token = getTokenFrom(request)
  let user = ''
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    user = await User.findById(decodedToken.id)
   
    await Settings.find({userId: user.id}).remove()
  } catch(exception) {
    next(exception)
  }
})

module.exports = usersRouter