const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let times = [
  {
    id: 1,
    date: "5.11.2019",
    time: 0.7
  },
  {
    id: 2,
    date: "4.11.2019",
    time: 5.7
  },
  {
    id: 3,
    date: "3.12.2019",
    time: 4.7
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

app.get('/times', (request, response) => {
  response.json(times)
})

const generateId = () => {
  const maxId = times.length > 0
  ? Math.max(...times.map(time => time.id))
  : 0

  return maxId + 1  
}

app.post('/times', (request, response) => {
  const body = request.body

  if (!body.time) {
    return response.status(400).json({
      error: 'Time missing'
    })
  }

  const newTime = {
    time: body.time,
    date: body.date,
    id: generateId(),
  }

  times = times.concat(newTime)
  
  response.json(newTime)
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)