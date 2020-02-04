const jwt = require('jsonwebtoken')
const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')
const User = require('../models/user')

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

workoutsRouter.get('/', async (request, response) => {  
  const workouts = await Workout.find({}).populate('user', { username: 1, name: 1, userId: 1 })
  response.json(workouts.map(workout => workout.toJSON()))
})

workoutsRouter.post('/', async (request, response, next) => {
  
  const body = request.body
  const token = getTokenFrom(request)
  
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    const user = await User.findById(decodedToken.id)
  
    const workout = new Workout({
      sport: body.sport,
      type: body.type,
      time: body.time,
      calories: body.calories,
      km: body.km,
      date: new Date(body.date),
      day: body.day,
      month: body.month,
      userId: user._id
    })

    const savedWorkout = await workout.save()
    user.workouts = user.workouts.concat(savedWorkout._id)
    await user.save()
    response.json(savedWorkout.toJSON())

  } catch(exception) {
    next(exception)
  }
})

workoutsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Workout.findByIdAndRemove(request.params.id)
  
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

module.exports = workoutsRouter