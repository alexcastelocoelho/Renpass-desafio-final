const PersonController = require('../app/controller/PersonController')

module.exports = (server, routes, prefix = '/api/v1/person') => {
    routes.post('/', PersonController.creating);
    routes.get('/', PersonController.listing);
    routes.get('/:id', PersonController.listone);
    routes.put('/:id', PersonController.updating);
    routes.delete('/:id', PersonController.deleting);


    server.use(prefix, routes)

}