const express = require('express')
const roomsRouter = require('./rooms.router')
const questionsRouter = require('./questions.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/rooms',roomsRouter)
  router.use('/questions', questionsRouter)
}


module.exports = routerApi
