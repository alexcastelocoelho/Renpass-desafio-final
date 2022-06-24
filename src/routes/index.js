const { Router } = require("express");
const Car = require("./CarRouter");
const Person = require("./PersonRouter");
const authenticate = require("./authenticateRouter");
const Rental = require("./RentalRouter");
const Reserve = require("./ReserveRouter");
const Fleet = require("./FleetRouter");

module.exports = (server) => {
  server.use((req, res, next) => {
    Car(server, new Router());
    Person(server, new Router());
    authenticate(server, new Router());
    Rental(server, new Router());
    Reserve(server, new Router());
    Fleet(server, new Router());

    next();
  });
};
// deploy
