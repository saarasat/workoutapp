const config = require('./utils/config')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const path = require('path')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const movesRouter = require('./controllers/moves')
const workoutsRouter = require('./controllers/workouts')
const programsRouter = require('./controllers/programs')
const settingsRouter = require('./controllers/settings')
const middleware = require('./utils/middleware')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(bodyParser.json())

app.use(express.static('build'))

app.use(cors())

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)
app.use('/api/workouts', workoutsRouter)
app.use('/api/moves', movesRouter)
app.use('/api/programs', programsRouter)
app.use('/api/settings', settingsRouter)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(middleware.requestLogger)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app