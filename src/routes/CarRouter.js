const CarController = require('../app/controller/CarController');
const validateCar = require('../app/validations/carvalidate');
module.exports = (server, routes, prefix = '/api/v1/car') => {
	routes.post('/', validateCar ,CarController.creating);
	routes.get('/', CarController.listing);
	routes.get('/:id', CarController.listone);
	routes.put('/:id', CarController.updating);
	routes.patch('/:id/accessories/:idAccessorie', CarController.updatingAcessoryCar);
	routes.delete('/:id', CarController.deleting);


	server.use(prefix, routes);

};