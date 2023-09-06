const CoreService = require('../services/core.service')
const UserService = require('../services/users.service')

let coreService = new CoreService();
let userService = new UserService();

class Room {
  constructor(name, user){
    this.id = coreService.getGUID()
    this.name = name
    this.user = this._validateUser(user)
    this.creationDate = new Date()
  }

  _validateUser(user){
    let userToReturn = null
    if(userService.getById(user.id)){
      userToReturn = userService.getById(user.id)
    }else{
      userToReturn = userService.create(user.name)
    }
    return userToReturn
  }
}

module.exports = Room
