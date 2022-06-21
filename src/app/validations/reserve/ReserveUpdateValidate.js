const Joi = require('joi').extend(require('@joi/date'));


module.exports = async (req, res, next) => {
	try{
		
		const validReserve = Joi.object({
			id_user: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
			data_start: Joi.date().format('DD/MM/YYYY'),
			data_end: Joi.date().format('DD/MM/YYYY'),
			id_car: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
			id_rental: Joi.string().regex(/^[0-9a-fA-F]{24}$/),
			final_value: Joi.number()
			
		});

		const {error} = await validReserve.validate(req.body, {abortEarly: false});
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
