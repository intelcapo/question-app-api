const VOTES = require("../data/votes");
const Vote = require("../models/vote");

class VotesService {
  constructor(){
    this.votes = VOTES
  }

  createNewVote(question, user){
    let voteIndex = this.votes.findIndex(vote => vote.question.id == question.id)
    if(voteIndex != -1){
      this.votes[voteIndex].users.push(user)
    }else{
      let vote = new Vote(question, user)
      this.votes.push(vote)
    }
  }

  addVote(questionId, user){
    let indexVote = this.getIndexVoteByQuestionId(questionId)
    if(indexVote != -1){
      let isExistingUser = this.getUserByVoteIndex(indexVote, user)
      if(!isExistingUser){
        this.votes[indexVote].users.push(user)
      }
    }
  }

  removeVote(questionId, user){
    let indexVote = this.getIndexVoteByQuestionId(questionId)
    if(indexVote != -1){
      let isExistingUser = this.getUserByVoteIndex(indexVote, user)
      if(isExistingUser){
        let userIndex = this.getUserIndexByVote(indexVote, user)
        this.votes[indexVote].users.splice(userIndex,1)
      }
    }
  }

  getIndexVoteByQuestionId(questionId){
    let indexVote = this.votes.findIndex(vote => vote.question.id == questionId)
    return indexVote
  }

  getUserByVoteIndex(indexVote, userToSearch){
    let user = this.votes[indexVote].users.find(user => user.id == userToSearch.id)
    return user
  }

  getUserIndexByVote(indexVote, userToSearch){
    let userIndex = this.votes[indexVote].users.findIndex(user => user.id == userToSearch.id)
    return userIndex
  }

  getAllVotes(){
    return this.votes
  }

  getVotesByRoomId(roomId){
    return this.votes.filter(vote => vote.question.room.id == roomId)
  }

  getVotesByQuestionId(questionId){
    let amountVotes = 0
    let indexVote = this.getIndexVoteByQuestionId(questionId)
    if(indexVote != -1){
      amountVotes=  this.votes[indexVote].users.length
    }
    return amountVotes
  }

}

module.exports = VotesService
