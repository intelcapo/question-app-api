const express = require('express')
const roomsRouter = require('./rooms.router')
const questionsRouter = require('./questions.router')
const usersRouter = require('./users.router')
const votesRouter = require('./votes.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/rooms',roomsRouter)
  router.use('/questions', questionsRouter)
  router.use('/users', usersRouter)
  router.use('/votes', votesRouter)
}


module.exports = routerApi
