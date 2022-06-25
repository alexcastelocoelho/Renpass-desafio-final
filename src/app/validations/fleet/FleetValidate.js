const Joi = require('joi').extend(require('@joi/date'));
const { objectid } = require('../../utils/REGEX');
const Enumstatus = require('../../utils/ENUMS/EnumObject').fleet;

module.exports = async (req, res, next) => {
  try {
    const validFleet = Joi.object({
      id_car: Joi.string().regex(objectid),
      id_rental: Joi.string().regex(objectid),
      status: Joi.string().valid(...Enumstatus),
      daily_value: Joi.number(),
      plate: Joi.string()
    });

    const { error } = await validFleet.validate(req.body, {
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
