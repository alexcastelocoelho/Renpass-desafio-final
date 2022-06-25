const PersonController = require('../app/controller/PersonController');
const ValidatePerson = require('../app/validations/person/PersonValidate');
const ValidateUpdatePerson = require('../app/validations/person/PersonUpdateValidate');

module.exports = (server, routes, prefix = '/api/v1/person') => {
  routes.post('/', ValidatePerson, PersonController.creating);
  routes.get('/', PersonController.listing);
  routes.get('/:id', PersonController.listone);
  routes.put('/:id', ValidateUpdatePerson, PersonController.updating);
  routes.delete('/:id', PersonController.deleting);

  server.use(prefix, routes);
};
// deploy
