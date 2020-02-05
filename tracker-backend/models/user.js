const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    minlength: 3,
    present: true,
  },
  passwordHash: String,
  workouts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workout'
    }
  ],
  settings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Settings'
    }
  ],
  programs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Programs'
    }
  ],
  moves: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Moves'
    }
  ]
})


userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User