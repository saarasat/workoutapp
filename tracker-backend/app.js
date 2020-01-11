const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const workoutsRouter = require('./controllers/workouts')
const settingsRouter = require('./controllers/settings')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

console.log('connecting to', config.MONGO_DB)

mongoose.connect(config.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(bodyParser.json())

app.use('/api/workouts', workoutsRouter)
app.use('/api/settings', settingsRouter)

app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app