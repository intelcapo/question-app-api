const CoreService = require("../services/core.service");
const RoomsService = require('../services/rooms.service');
const UsersService = require("../services/users.service");
const VotesService = require("../services/votes.service")

const coreService = new CoreService()
const roomService = new RoomsService()
const usersService = new UsersService()
const votesService = new VotesService()

class Question{
  constructor(description, roomId, user){
      this.id = coreService.getGUID(),
      this.description = description,
      this.votes = 1,
      this.creationDate = new Date(),
      this.room = roomService.getById(roomId),
      this.user = this._validateUser(user)
      this.isAnswered = false
      this._createVote()

  }

  _validateUser(user){
    let userToReturn = null
    if(usersService.getById(user.id)){
      userToReturn = usersService.getById(user.id)
    }else{
      userToReturn = usersService.create(user.name)
    }
    return userToReturn
  }

  _createVote(){
    votesService.createNewVote(this,this.user)
  }
}

module.exports = Question
