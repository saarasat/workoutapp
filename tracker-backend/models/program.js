const mongoose = require('mongoose')

const programSchema = new mongoose.Schema({
  name: { type: String },
  moves: [ {
    type: mongoose.Schema.Types.Mixed
  }],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

programSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Program', programSchema)

