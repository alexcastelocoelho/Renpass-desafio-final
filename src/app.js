const express = require('express')
require('./infra/database/mongo')
class App {
        constructor() {
            this.server = express();
            this.middleware();
            this.routes();
        }
    
        middleware() {
            this.server.use(express.json())
        }

        routes() {
            router(this.server)
        }
}

module.exports = new App().server