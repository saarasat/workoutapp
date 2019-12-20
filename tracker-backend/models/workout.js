const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  
    sport: String,
    time: String,
    date: Date,
    day: String,
    month: String
  })

  workoutSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  }
)

module.exports = mongoose.model('Workout', workoutSchema)

