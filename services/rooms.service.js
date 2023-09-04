const ROOMS = require("../data/rooms");
const Room = require("../models/room");

class RoomsService {

  constructor(){
    this.roomList = ROOMS
  }

  createRoom(roomName){
    let roomToCreate = new Room(roomName)
    this.roomList.push(roomToCreate)
    return roomToCreate
  }

  getRooms(){
    return this.roomList
  }
}

module.exports = RoomsService
