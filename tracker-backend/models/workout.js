const mongoose = require('mongoose')

const url = process.env.MONGO_DB

mongoose.connect(url, { useNewUrlParser: true })
  .then(result => {
    console.log('Connected to database')
  })
  .catch((error) => {
    console.log('error connecting to database: ', error.message)
  })
  
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

