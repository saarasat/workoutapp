 
require('dotenv').config()

let PORT = process.env.PORT
console.log(PORT)
let MONGODB_URI = process.env.MONGODB_URI
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGO_DB
}

module.exports = {
  MONGODB_URI,
  PORT
}