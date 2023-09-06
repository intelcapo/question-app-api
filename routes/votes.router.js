const express = require('express')
const RESPONSE_CODE = require('../constants/responseCodes')
const router = express.Router()
const VotesService = require('../services/votes.service')


const votesService = new VotesService()

router.get('/', (request, response)=>{
  response.status(RESPONSE_CODE.ok).json(votesService.getAllVotes())
})

router.get('/room/:roomId', (request, response)=>{
  const { roomId } = request.params
  response.status(RESPONSE_CODE.ok).json(votesService.getVotesByRoomId(roomId))
})

module.exports = router
