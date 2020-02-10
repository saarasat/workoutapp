const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({

  weight: { 
    type: Number, 
    require: true 
  },
  height: { 
    type: Number,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  }

})

settingsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Settings', settingsSchema)

