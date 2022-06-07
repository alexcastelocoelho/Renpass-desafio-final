const Joi = require('joi');

module.exports = async (req, res, next) => {
	try{
		
		const validPerson = Joi.object({
			name:Joi.string().min(3).required(),
			cpf: Joi.string().required(),
			birthday: Joi.string().required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(6).required(),
			canDrive: Joi.string().valid('yes', 'no').required()
			
		});

		const {error} = await validPerson.validate(req.body, {abortEarly: true});
		if (error) throw error;
		return next();
	} catch (error){		
		return res.status(400).json({Error: error.message});
	}
};
