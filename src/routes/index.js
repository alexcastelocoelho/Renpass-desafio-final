const { Router} = require('express');
const Car = require('./CarRouter');
const Person = require('./PersonRouter');
const authenticate = require('./authenticateRouter');
const Rental = require('./RentalRouter');
module.exports = (server) => {
	server.use((req, res, next) => {
		Car(server, new Router());
		Person(server, new Router());
		authenticate(server, new Router());
		Rental(server, new Router());
        
		next();
	});
};