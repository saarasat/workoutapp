const settingsRouter = require('express').Router()
const Settings = require('../models/settings')

settingsRouter.get('/', async (request, response) => {
  await Settings.find({}).then(settings => {
    response.json(settings)
  })
})

settingsRouter.post('/', (request, response) => {

  const body = request.body

  if (body.age === undefined || body.height === undefined || body.weight === undefined) {
    return response.status(400).json({
      error: 'Settings missing'
    })
  }
  const settings = new Settings({
    age: body.age,
    weight: body.weight,
    height: body.height,
  })

  settings.save().then(savedSettings => {
    response.json(savedSettings.toJSON())
  })
})

module.exports = settingsRouter