const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const validcar = Joi.object({
      model: Joi.string().required(),
      type: Joi.string().required(),
      brand: Joi.string().required(),
      color: Joi.string().required(),
      year: Joi.number().min(1950).max(2022).required(),
      accessories: Joi.array().min(1).unique().required(),
      passengersQtd: Joi.number().min(1).required()
    });

    const { error } = await validcar.validate(req.body, { abortEarly: false });
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
