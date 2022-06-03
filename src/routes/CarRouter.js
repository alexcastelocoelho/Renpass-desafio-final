const CarController = require('../app/controller/CarController')

module.exports = (server, routes, prefix = '/api/v1/car') => {
    routes.post('/', CarController.creating);
    routes.get('/', CarController.listing);
    routes.get('/:id', CarController.listone);


    server.use(prefix, routes)

}