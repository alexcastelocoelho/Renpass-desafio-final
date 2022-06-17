const FleetController = require('../app/controller/FleetController');

module.exports = (server, routes, prefix = '/api/v1/rental/:id') => {
	routes.post('/fleet',FleetController.creating);
	routes.get('/fleet', FleetController.listing);
	routes.get('/fleet/:id', FleetController.listone);
	routes.put('/fleet/:id', FleetController.updating);
	routes.delete('/fleet/:id', FleetController.deleting);


	server.use(prefix, routes);

};