const ROOMS = require("../data/rooms");
const Room = require("../models/room");

class RoomsService {
  constructor(){
    this.roomList = ROOMS
  }

  createRoom(roomName, user){
    let roomToCreate = new Room(roomName, user)
    this.roomList.push(roomToCreate)
    return roomToCreate
  }

  getRooms(){
    return this.roomList
  }

  getById(roomId){
    return this.roomList.find((room)=> room.id === roomId)
  }
}

module.exports = RoomsService
