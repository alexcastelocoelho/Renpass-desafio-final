const Joi = require('joi').extend(require('@joi/date'));
const { objectid } = require('../../utils/REGEX');

module.exports = async (req, res, next) => {
  try {
    const validReserve = Joi.object({
      id_user: Joi.string().regex(objectid),
      data_start: Joi.date().format('DD/MM/YYYY'),
      data_end: Joi.date().format('DD/MM/YYYY'),
      id_car: Joi.string().regex(objectid),
      id_rental: Joi.string().regex(objectid),
      final_value: Joi.number()
    });

    const { error } = await validReserve.validate(req.body, {
      abortEarly: false
    });
    if (error) throw error;

    return next();
  } catch (error) {
    return res.status(400).json({
      errors: error.details.map((alert) => ({
        description: alert.message,
        name: alert.path.join('.')
      }))
    });
  }
};
// deploy
