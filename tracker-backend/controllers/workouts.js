const workoutsRouter = require('express').Router()
const Workout = require('../models/workout')

workoutsRouter.get('/', (request, response) => {
  Workout.find({}).then(workouts => {
    response.json(workouts)
  })
})

workoutsRouter.post('/', (request, response) => {
  
  const body = request.body

  if (body.time === undefined) {
    return response.status(400).json({
      error: 'Time missing'
    })
  }

  const workout = new Workout({
    sport: body.sport,
    time: body.time,
    date: body.date,
    day: body.day,
    month: body.month
  })

  workout.save().then(savedWorkout => {
    response.json(savedWorkout.toJSON())
  })
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