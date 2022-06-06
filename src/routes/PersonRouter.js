const PersonController = require('../app/controller/PersonController');
const validate = require('../app/validations/personvalidate');
module.exports = (server, routes, prefix = '/api/v1/person') => {
	routes.post('/',validate ,PersonController.creating);
	routes.get('/', PersonController.listing);
	routes.get('/:id', PersonController.listone);
	routes.put('/:id', PersonController.updating);
	routes.delete('/:id', PersonController.deleting);


	server.use(prefix, routes);

};