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
    let indexQuestion = this.getQuestionById(questionId)
    if(indexQuestion>=0){

      votesService.addVote(questionId,user)
      this.questions[indexQuestion].votes = votesService.getVotesByQuestionId(questionId)
    }
    return this.questions[indexQuestion]
  }

  removeVote(questionId, user){
    let indexQuestion = this.getQuestionById(questionId)
    if(indexQuestion>=0){
      votesService.removeVote(questionId,user)
      this.questions[indexQuestion].votes = votesService.getVotesByQuestionId(questionId)
    }
    return this.questions[indexQuestion]
  }

  updateAnswerStatus(questionId){
    let indexQuestion = this.getQuestionById(questionId)
    if(indexQuestion>=0){
      this.questions[indexQuestion].isAnswered = true
    }
    return this.questions[indexQuestion]
  }

  getQuestionById(questionId){
    return  this.questions.findIndex(question => question.id == questionId)
  }
}

module.exports = QuestionsService
