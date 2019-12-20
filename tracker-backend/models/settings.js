const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({

  age: { type: Number, min: 10, max: 120 },
  weight: { type: Number, min: 0, max: 250 },
  height: { type: Number, min: 50, max: 250 }

})

settingsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Settings', settingsSchema)

