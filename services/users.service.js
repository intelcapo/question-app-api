const User = require("../models/user")
const USERS = require("../data/users")

class UsersService {
  constructor(){
    this.users = USERS
  }

  getById(userId){
    return this.users.find(user => user.id == userId)
  }

  create(user){
    let newUser = new User(user)
    this.users.push(newUser)
    return newUser
  }
}

module.exports = UsersService
