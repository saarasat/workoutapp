const mongoose = require('mongoose')

const workoutSchema = new mongoose.Schema({

  sport: {
    type: String,
    minlength: 1,
    required: true
  },
  time: {
    type: String,
    minlength: 3,
    require: true
  },
  type: {
    type: String,
    minlength: 3,
    require: true
  },
  calories: {
    type: Number,
    minlength: 1,
    require: true
  },
  km: {
    type: Number,
    minlength: 1,
  },
  date: {
    type: Date,
    require: true
  },
  day: {
    type: String,
    require: true
  },
  month: {
    type: String,
    require: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }
})

workoutSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Workout', workoutSchema)

