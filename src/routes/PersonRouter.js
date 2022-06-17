const PersonController = require('../app/controller/PersonController');
const validateperson = require('../app/validations/PersonValidate');
module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/', validateperson ,PersonController.creating);
	routes.get('/', PersonController.listing);
	routes.get('/:id', PersonController.listone);
	routes.put('/:id', PersonController.updating);
	routes.delete('/:id', PersonController.deleting);


	server.use(prefix, routes);

};