const jwt = require('jsonwebtoken')
const programsRouter = require('express').Router()
const Program = require('../models/program')
const User = require('../models/user')
const getTokenFrom = require('./token')

programsRouter.get('/', async (request, response, next) => {
  const token = getTokenFrom(request)
  let user = ''
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }  

    user = await User.findById(decodedToken.id)
    const programs = await Program.find({userId : user.id}).populate('user', { username: 1, name: 1, userId: 1 })
    response.json(programs.map(programs => programs.toJSON()))

  } catch(exception) {
    next(exception)
  }

})

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
      difficulty: body.difficulty,
      userId: user._id 
    })

    const savedPrograms = await programs.save()
    user.programs = user.programs.concat(savedPrograms._id)
    await user.save()
    response.status(201).json(savedPrograms.toJSON())

  } catch(exception) {
    next(exception)
  }
})

programsRouter.post('/:id/moves', async (request, response, next) => {
  const moves = request.body
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const program = await Program.findById(request.params.id)
    if (!program.moves) {
      program.moves = []
    }
    program.moves = program.moves.concat(moves)
    await program.save()
    
    response.json(program.toJSON())
  
  } catch(exception) {
    next(exception)
  }
})

programsRouter.put('/:id', async (request, response, next) => {
  const {name, difficulty, moves} = request.body
  const program = {name, difficulty, moves}
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const updatedProgram = await Program.findByIdAndUpdate(request.params.id, program, {new:true})
    response.json(updatedProgram.toJSON())
  } catch(exception) {
    next(exception)
  }
})


programsRouter.delete('/:id', async (request, response, next) => {
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    await Program.findByIdAndRemove(request.params.id)
  
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})



module.exports = programsRouter