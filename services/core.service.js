const { v4: uuidv4 } = require('uuid');

class CoreService {
  getGUID(){
    return uuidv4()
  }
}

module.exports = CoreService
