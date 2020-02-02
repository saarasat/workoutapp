const jwt = require('jsonwebtoken')
const movesRouter = require('express').Router()
const Move = require('../models/move')
const User = require('../models/user')

movesRouter.get('/', async (request, response) => {
  const moves = await Move.find({}).populate('user', { username: 1, name: 1 })
  
  response.json(moves.map(moves => moves.toJSON()))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

movesRouter.post('/', async (request, response, next) => {

  const body = request.body
  const token = getTokenFrom(request)

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
  

  const user = await User.findById(decodedToken.id)

  const moves = new Move({
    name: body.name,
    userId: user._id 
  })

  const savedMoves = await moves.save()
  user.moves = user.moves.concat(savedMoves._id)
  await user.save()
  response.json(savedMoves.toJSON())
  } catch(expeption) {
    next(expeption)
  }
})

module.exports = movesRouter