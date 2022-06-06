const Joi = require('joi');

const validPerson = Joi.object({
	name:Joi.string().min(3).required(),
	cpf: Joi.string().required(),
	birthday: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	candrive: Joi.string().valid('yes', 'no').required()


});

module.exports = {
	validPerson

};