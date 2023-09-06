const QUESTIONS = require("../data/questions");
const Question = require("../models/question");
const VotesService = require("../services/votes.service")

const votesService = new VotesService()

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
    const {description,roomId,user} = question
    let newQuestion = new Question(description, roomId, user)
    this.questions.push(newQuestion)
    return newQuestion
  }

  addVote(questionId, user){
    let indexQuestion = this.questions.findIndex(question => question.id == questionId)
    if(indexQuestion>=0){
      this.questions[indexQuestion].votes++
      votesService.addVote(questionId,user)
    }
    return this.questions[indexQuestion]
  }

  removeVote(questionId, user){
    let indexQuestion = this.questions.findIndex(question => question.id == questionId)
    if(indexQuestion>=0){
      let votes = this.questions[indexQuestion].votes
      if(votes > 0){
        this.questions[indexQuestion].votes--
      }else{
        this.questions[indexQuestion].votes = 0
      }

      votesService.removeVote(questionId,user)
    }
    return this.questions[indexQuestion]
  }
}

module.exports = QuestionsService
