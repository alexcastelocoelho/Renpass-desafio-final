const CarController = require("../app/controller/CarController");
const ValidateCar = require("../app/validations/car/CarValidate");
const ValidateUpdateCar = require("../app/validations/car/CarUpdateValidate");

module.exports = (server, routes, prefix = "/api/v1/car") => {
  routes.post("/", ValidateCar, CarController.creating);
  routes.get("/", CarController.listing);
  routes.get("/:id", CarController.listone);
  routes.put("/:id", ValidateUpdateCar, CarController.updating);
  routes.patch(
    "/:id/accessories/:idaccessories",
    CarController.updatingAcessoryCar
  );
  routes.delete("/:id", CarController.deleting);

  server.use(prefix, routes);
};
// deploy
