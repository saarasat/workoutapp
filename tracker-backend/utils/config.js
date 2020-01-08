 
require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
  console.log(process.env.NODE_ENV)
  MONGODB_URI = process.env.TEST_MONGO_DB
}

module.exports = {
  MONGODB_URI,
  PORT
}