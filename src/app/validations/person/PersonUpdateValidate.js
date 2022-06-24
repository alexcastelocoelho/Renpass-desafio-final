const Joi = require("joi").extend(require("@joi/date"));
const { cpf } = require("../../utils/REGEX");
const EnumCanDrive = require("../../utils/ENUMS/EnumObject").authenticate;

module.exports = async (req, res, next) => {
  try {
    const validPerson = Joi.object({
      name: Joi.string().min(3).required(),
      // eslint-disable-next-line no-useless-escape
      cpf: Joi.string().regex(cpf).required(),
      birthday: Joi.date().format("DD/MM/YYYY").required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string()
        .valid(...EnumCanDrive)
        .required(),
    });

    const { error } = await validPerson.validate(req.body, {
      abortEarly: false,
    });
    if (error) throw error;
    // if(!cpf(req.body.cpf)) {
    // 	throw new Error('cpf invalid');
    // }

    return next();
  } catch (error) {
    return res.status(400).json({
      errors: error.details.map((alert) => ({
        description: alert.message,
        name: alert.path.join("."),
      })),
    });
  }
};
// deploy
