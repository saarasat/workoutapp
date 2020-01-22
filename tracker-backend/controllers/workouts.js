const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')
const User = require('../models/user')

workoutsRouter.get('/', async (request, response) => {
  const workouts = await Workout.find({}).populate('user', { username: 1, name: 1 })

  response.json(workouts.map(workout => workout.toJSON()))
})

workoutsRouter.post('/', async (request, response, next) => {
  
  const body = request.body
  console.log(body)

  let user = ''

  try {
    user = await User.findById(body.userId)
  } catch(exception) {
    next(exception)
  }
  console.log(user)
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

  console.log(workout)

  try {
    const savedWorkout = await workout.save()
    user.workouts = user.workouts.concat(savedWorkout._id)
    await user.save()
    response.json(savedWorkout.toJSON())
  } catch(exception) {
    next(exception)
  }
})

workoutsRouter.get('/:id', (request, response) => {
  const id = Number(request.params.id)
  const time = workouts.find(time => time.id === id)
  
  if (time) {
    response.json(time)
  } else {
    response.status(404).end()
  }
  
})

workoutsRouter.delete('/:id', (request, response) => {
  const id = Number(request.params.id)
  times = workouts.filter(time => time.id !== id)

  response.status(204).end()
})

module.exports = workoutsRouter