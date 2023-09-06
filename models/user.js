const CoreService = require('../services/core.service')
const coreService = new CoreService()

class User {
  constructor(name){
    this.id = coreService.getGUID(),
    this.name = name
  }
}

module.exports = User
