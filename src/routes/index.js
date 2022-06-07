const { Router} = require('express');
const Car = require('./CarRouter');
const Person = require('./PersonRouter');
const authenticate = require('./authenticateRouter');
module.exports = (server) => {
	server.use((req, res, next) => {
		Car(server, new Router());
		Person(server, new Router());
		authenticate(server, new Router());

        
		next();
	});
};