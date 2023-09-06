const express = require('express')
const router = express.Router()
const RESPONSE_CODE = require('../constants/responseCodes')
const RoomsService = require('../services/rooms.service')
const roomsService = new RoomsService()


router.get('/', (request,response)=>{
  let rooms = roomsService.getRooms()
  response.status(RESPONSE_CODE.ok).json(rooms)
})

router.get('/:id', (request,response)=>{
  let {id} = request.params
  let room = roomsService.getById(id)
  response.status(RESPONSE_CODE.ok).json(room)
})

router.post('/', (request,response)=>{
  let room = request.body
  let roomCreated = roomsService.createRoom(room.name, room.user)
  response
  .status(RESPONSE_CODE.created)
  .json(roomCreated)
})

module.exports = router
