
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const Workout = require('./models/workout')

app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

let times = [
  {
    "sport": "Waliking",
    "time": "0:0",
    "date": "2019-12-19T22:46:33.102Z",
    "day": "Fri",
    "month": "December",
    "id": 42
  },
  {
    "sport": "Biking",
    "time": "0:0",
    "date": "2019-12-19T22:54:15.433Z",
    "day": "Fri",
    "month": "December",
    "id": 43
  },
  {
    "sport": "Biking",
    "time": "0:0",
    "date": "2019-12-19T22:56:01.084Z",
    "day": "Fri",
    "month": "December",
    "id": 44
  }
]

let settings = [
  {
    "age": "22",
    "weight": "50",
    "height": "160",
    "id": 1
  },
  {
    "age": "55",
    "weight": "50",
    "height": "160",
    "id": 2
  }
]

app.get('/', (request, response) => {
  response.send('Hello world')
})

app.get('/times/:id', (request, response) => {
  const id = Number(request.params.id)
  const time = times.find(time => time.id === id)
  
  if (time) {
    response.json(time)
  } else {
    response.status(404).end()
  }
  
})

app.delete('/times/:id', (request, response) => {
  const id = Number(request.params.id)
  times = times.filter(time => time.id !== id)

  response.status(204).end()
})

app.get('/api/times', (request, response) => {
  Workout.find({}).then(workouts => {
    response.json(workouts)
  })
})

app.get('/settings', (request, response) => {
  response.json(settings)
})

const generateId = ({items}) => {
  
  const maxId = items.length > 0
  ? Math.max(...items.map(item => item.id))
  : 0

  return maxId + 1  
}

app.post('/api/times', (request, response) => {
  
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

app.post('/settings', (request, response) => {
  
  let body = request.body

  if (!body.age || !body.height || !body.weight) {
    return response.status(400).json({
      error: 'Settings missing'
    })
  }
  let newSettings = {
    id: generateId(settings ? settings : []),
    age: body.age,
    weight: body.weight,
    height: body.height
  }
  newSettings = settings.concat(newSettings)  
  response.json(newSettings)
})


const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
