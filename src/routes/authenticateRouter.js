const authenticateController = require("../app/controller/AuthenticateController");

module.exports = (server, routes, prefix = "/api/v1/authenticate") => {
  routes.post("/", authenticateController.create);

  server.use(prefix, routes);
};
// deploy
