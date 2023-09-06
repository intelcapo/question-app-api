const express = require('express')
const RESPONSE_CODE = require('../constants/responseCodes')
const QuestionsService = require('../services/questions.service')
const router = express.Router()

const questionsService = new QuestionsService()

router.get('/', (request, response)=>{
  let questions = questionsService.getAll()
  response.status(RESPONSE_CODE.ok).json(questions)
})

router.get('/:roomId', (request, response)=>{
  let {roomId} = request.params
  let questionsByRoom = questionsService.getByRoomId(roomId)
  response.status(RESPONSE_CODE.ok).json(questionsByRoom)
})

router.post('/', (request, response)=>{
  let questionData = request.body
  let questionCreated = questionsService.create(questionData)
  response.status(RESPONSE_CODE.created).json(questionCreated)
})

router.put('/:id/addVote', (request, response)=>{
  const {id} = request.params
  const user = request.body
  let questionUpdated = questionsService.addVote(id, user)
  response.status(RESPONSE_CODE.ok).json(questionUpdated)
})

router.put('/:id/removeVote', (request, response)=>{
  const {id} = request.params
  const user = request.body
  let questionUpdated = questionsService.removeVote(id, user)
  response.status(RESPONSE_CODE.ok).json(questionUpdated)
})

module.exports = router
