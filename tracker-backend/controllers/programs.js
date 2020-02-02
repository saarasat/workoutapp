const jwt = require('jsonwebtoken')
const programsRouter = require('express').Router()
const Program = require('../models/program')
const User = require('../models/user')

programsRouter.get('/', async (request, response) => {
  const programs = await Program.find({}).populate('user', { username: 1, name: 1 })
  
  response.json(programs.map(programs => programs.toJSON()))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

programsRouter.post('/', async (request, response, next) => {

  const body = request.body
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
  

  const user = await User.findById(decodedToken.id)

  const programs = new Program({
    name: body.name,
    moves: body.moves,
    userId: user._id 
  })

  const savedPrograms = await programs.save()
  user.programs = user.programs.concat(savedPrograms._id)
  await user.save()
  response.json(savedPrograms.toJSON())
  } catch(expeption) {
    next(expeption)
  }
})

module.exports = programsRouter