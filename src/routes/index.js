const { Router} = require('express');
const Car = require('./CarRouter');
const Person = require('./PersonRouter');
module.exports = (server) => {
	server.use((req, res, next) => {
		Car(server, new Router());
		Person(server, new Router());

        
		next();
	});
};