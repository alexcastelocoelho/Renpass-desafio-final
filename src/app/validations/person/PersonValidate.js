const Joi = require('joi').extend(require('@joi/date'));


module.exports = async (req, res, next) => {
	try{
		
		const validPerson = Joi.object({
			name:Joi.string().min(3).required(),
			// eslint-disable-next-line no-useless-escape
			cpf: Joi.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/).required(),
			birthday: Joi.date().format('DD/MM/YYYY').required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
			canDrive: Joi.string().valid('yes', 'no').required()
			
		});

		const {error} = await validPerson.validate(req.body, {abortEarly: false});
		if (error) throw error;
		// if(!cpf(req.body.cpf)) {
		// 	throw new Error('Invalid CPF, check the format or enter a valid CPF');
		// }
		
		return next();
	} catch (error){		
		return res.status(400).json({
			errors: error.details.map((alert) => ({
				description: alert.message,
				name: alert.path.join('.')
			}))
		});
	}
};
