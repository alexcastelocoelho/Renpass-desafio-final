const Joi = require('joi').extend(require('@joi/date'));
// const { cpf } = require("../../utils/REGEX");
const EnumCanDrive = require('../../utils/ENUMS/EnumObject').authenticate;
const cpfvalid = require('../../utils/CpfCnpjvalid');
const AgeValid = require('../../utils/AgeValid');

module.exports = async (req, res, next) => {
  try {
    const validPerson = Joi.object({
      name: Joi.string().min(3).required(),
      cpf: Joi.string()
        .custom((cpf, helper) => {
          const valid = cpfvalid(cpf);
          if (!valid) {
            return helper.message('Invalid CPF, check the format or enter a valid CPF');
          }
          return valid;
        })
        .required(),
      birthday: Joi.date()
        .custom((birthday, helper) => {
          const valid = AgeValid(birthday);
          if (valid < 18) {
            return helper.message('you must be at least 18 years old');
          }
          return valid;
        })
        .format('DD/MM/YYYY')
        .required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      canDrive: Joi.string()
        .valid(...EnumCanDrive)
        .required()
    });

    const { error } = await validPerson.validate(req.body, {
      abortEarly: false
    });
    if (error) throw error;
    // if(!cpf(req.body.cpf)) {
    // 	throw new Error('Invalid CPF, check the format or enter a valid CPF');
    // }

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
