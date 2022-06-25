const mongoose = require('mongoose');
const config = require('../../../config/config');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(
      // `mongodb://${config.database.host}/${config.database.collection}`

      process.env.MONGO_ATLAS || `mongodb://${config.database.host}/${config.database.collection}`
      // `mongodb+srv://root:${config.database.password}@compass.gemwekh.mongodb.net/?retryWrites=true&w=majority`
    );
  }
}

module.exports = new Database();
// deploy
