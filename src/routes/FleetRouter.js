const FleetController = require('../app/controller/FleetController');
const FleetValidate = require('../app/validations/fleet/FleetValidate');
const FleetUpdateValidate = require('../app/validations/fleet/FleetUpdateValidate');
module.exports = (server, routes, prefix = '/api/v1/rental/:id') => {
	routes.post('/fleet', FleetValidate ,FleetController.creating);
	routes.get('/fleet', FleetController.listing);
	routes.get('/fleet/:id', FleetController.listone);
	routes.put('/fleet/:id', FleetUpdateValidate ,FleetController.updating);
	routes.delete('/fleet/:id', FleetController.deleting);


	server.use(prefix, routes);

};
//deploy