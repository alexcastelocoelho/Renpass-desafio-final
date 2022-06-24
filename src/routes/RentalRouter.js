const RentalController = require("../app/controller/RentalController");

module.exports = (server, routes, prefix = "/api/v1/rental") => {
  routes.post("/", RentalController.creating);
  routes.get("/", RentalController.listing);
  routes.get("/:id", RentalController.listone);
  routes.put("/:id", RentalController.updating);
  routes.delete("/:id", RentalController.deleting);

  server.use(prefix, routes);
};
// deploy
