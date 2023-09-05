const QUESTIONS = require("../data/questions");
const CoreService = require("./core.service");
const RoomsService = require('./rooms.service');
const UsersService = require("./users.service");

const coreService = new CoreService()
const roomService = new RoomsService()
const usersService = new UsersService()

class QuestionsService {
  constructor(){
    this.questions = QUESTIONS
  }

  getAll(){
    return this.questions
  }

  getByRoomId(roomId){
    return this.questions.filter(question => question.room.id == roomId)
  }

  create(question){
    const {description,roomId,userId} = question
    const newQuestion = {
      id: coreService.getGUID(),
      description,
      votes: 1,
      creationDate: new Date(),
      room: roomService.getById(roomId),
      user: usersService.getById(userId)
    }
    this.questions.push(newQuestion)
    return newQuestion
  }

  addVote(questionId){
    let indexQuestion = this.questions.findIndex(question => question.id == questionId)
    if(indexQuestion>=0){
      this.questions[indexQuestion].votes++
    }
    return this.questions[indexQuestion]
  }

  removeVote(questionId){
    let indexQuestion = this.questions.findIndex(question => question.id == questionId)
    if(indexQuestion>=0){
      this.questions[indexQuestion].votes--
    }
    return this.questions[indexQuestion]
  }
}

module.exports = QuestionsService
