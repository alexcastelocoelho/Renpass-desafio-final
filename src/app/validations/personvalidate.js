const Joi = require('joi').extend(require('@joi/date'));
const cpf = require('../utils/cpfvalid');

module.exports = async (req, res, next) => {
	try{
		
		const validPerson = Joi.object({
			name:Joi.string().min(3).required(),
			// eslint-disable-next-line no-useless-escape
			cpf: Joi.string().max(14).required(),
			birthday: Joi.date().format('DD/MM/YYYY').required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
			canDrive: Joi.string().valid('yes', 'no').required()
			
		});

		const {error} = await validPerson.validate(req.body, {abortEarly: false});
		if (error) throw error;
		if(!cpf(req.body.cpf)) {
			throw new Error('cpf invalid');
		}
		
		return next();
	} catch (error){		
		return res.status(400).json({Error: error.message});
	}
};
