const ReserveController = require('../app/controller/ReserveController');

module.exports = (server, routes, prefix = '/api/v1/rental/:id') => {
	routes.post('/reserve',ReserveController.creating);
	routes.get('/reserve', ReserveController.listing);
	routes.get('/reserve/:id', ReserveController.listone);
	routes.put('/reserve/:id', ReserveController.updating);
	routes.delete('/reserve/:id', ReserveController.deleting);


	server.use(prefix, routes);

};