const Joi = require('joi').extend(require('@joi/date'));


module.exports = async (req, res, next) => {
	try{
		
		const validFleet = Joi.object({
			
			id_car: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
			id_rental: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
			status: Joi.string().valid('available', 'unavailable', 'rented'),
			daily_value: Joi.number(),
			plate: Joi.string()
			
		});

		const {error} = await validFleet.validate(req.body, {abortEarly: false});
		if (error) throw error;
		
		
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
