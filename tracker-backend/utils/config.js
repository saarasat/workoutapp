 
require('dotenv').config()

let PORT = process.env.PORT
let MONGO_DB = process.env.MONGO_DB

if (process.env.NODE_ENV === 'test') {
  MONGO_DB = process.env.TEST_MONGO_DB
}

module.exports = {
  MONGO_DB,
  PORT
}