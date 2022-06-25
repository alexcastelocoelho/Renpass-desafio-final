const express = require('express');
const swagger = require('swagger-ui-express');
const router = require('./routes');
const swaggerDocs = require('./app/docs/swagger.json');
require('./infra/database/mongo');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
    this.server.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;
// deploy
