const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Personrepository = require('../repository/PersonRepository');

class AuthenticateService {
  async Authenticate(email, password) {
    const person = await Personrepository.checkemail(email);

    if (!person) {
      throw new Error('unknown email');
    }

    const checkpassword = await bycript.compare(password, person.password);

    if (!checkpassword) {
      throw new Error('invalid password');
    }

    person.password = undefined;

    const token = jwt.sign({ id: person.id }, process.env.SECRET, {
      expiresIn: 86400
    });

    return { token, email: person.email, canDrive: person.canDrive };
  }
}

module.exports = new AuthenticateService();
// deploy
