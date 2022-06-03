const { Router} = require('express')
const Car = require('./CarRouter')
module.exports = (server) => {
    server.use((req, res, next) => {
        Car(server, new Router())
        
        next();
    })
}