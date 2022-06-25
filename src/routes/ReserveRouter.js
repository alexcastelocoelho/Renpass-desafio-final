const ReserveController = require('../app/controller/ReserveController');
const ReserveValidate = require('../app/validations/reserve/ReserveValidate');
const ReserveUpdateValidate = require('../app/validations/reserve/ReserveUpdateValidate');

module.exports = (server, routes, prefix = '/api/v1/rental/:id') => {
  routes.post('/reserve', ReserveValidate, ReserveController.creating);
  routes.get('/reserve', ReserveController.listing);
  routes.get('/reserve/:id', ReserveController.listone);
  routes.put('/reserve/:id', ReserveUpdateValidate, ReserveController.updating);
  routes.delete('/reserve/:id', ReserveController.deleting);

  server.use(prefix, routes);
};
// deploy
