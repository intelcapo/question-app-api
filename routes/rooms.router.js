const express = require('express')
const router = express.Router()
const RESPONSE_CODE = require('../constants/responseCodes')
const RoomsService = require('../services/rooms.service')
const roomsService = new RoomsService()


router.get('/', (request,response)=>{
  let rooms = roomsService.getRooms()
  response.status(RESPONSE_CODE.ok).json(rooms)
})

router.post('/', (request,response)=>{
  let room = request.body
  let roomCreated = roomsService.createRoom(room.name)
  response
  .status(RESPONSE_CODE.created)
  .json(roomCreated)
})

module.exports = router