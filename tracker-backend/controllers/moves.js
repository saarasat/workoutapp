const jwt = require('jsonwebtoken')
const movesRouter = require('express').Router()
const Move = require('../models/move')
const User = require('../models/user')
const getTokenFrom = require('./token')


movesRouter.get('/', async (request, response, next) => {
  const token = getTokenFrom(request)

  let user = ''
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    user = await User.findById(decodedToken.id)
    const moves = await Move.find({userId : user.id}).populate('user', { username: 1, name: 1, userId: 1 })
  
    response.json(moves.map(moves => moves.toJSON()))
  } catch(exception) {
    next(exception)
  }

})

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
  
  } catch(exception) {
    next(exception)
  }
})

module.exports = movesRouter