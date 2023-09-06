const express = require('express')
const router = express.Router()
const UsersService = require('../services/users.service')
const RESPONSE_CODE = require('../constants/responseCodes')

const userService = new UsersService()

router.get('/:id', (request, response)=>{
  const {id} = request.params
  let user = userService.getById(id)
  response.status(RESPONSE_CODE.ok).json(user)
})

router.post('/', (request, response)=>{
  const userToCreate = request.body
  let newUser = userService.create(userToCreate.name)
  response.status(RESPONSE_CODE.ok).json(newUser)
})

module.exports = router
