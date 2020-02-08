const mongoose = require('mongoose')

const moveSchema = new mongoose.Schema({

  name: { 
    type: String,
    minlength: 5,
    maxlength: 30,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    minLength: 3,
    ref: 'User'
  }
})

moveSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Move', moveSchema)

