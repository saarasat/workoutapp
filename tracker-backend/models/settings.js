const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({

  age: { type: Number },
  weight: { type: Number },
  height: { type: Number }

})

settingsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Settings', settingsSchema)

