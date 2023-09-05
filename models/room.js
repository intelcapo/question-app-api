const CoreService = require('../services/core.service')

let coreService = new CoreService()

class Room {
  constructor(name){
    this.id = coreService.getGUID()
    this.name = name
    this.creationDate = new Date()
  }
}

module.exports = Room
