
const Personrepository = require('../repository/PersonRepository');
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authconfig = require('../../config/auth.json');
class AuthenticateService {
	async Authenticate(email, password) {
		const person = await Personrepository.checkemail(email);
		
		if(!person) {
			throw new Error('unknown email');
		}

		const checkpassword = await bycript.compare(password, person.password);

		if(!checkpassword) {
			throw new Error('invalid password');
		}

		person.password = undefined;

		const token = jwt.sign({id: person.id}, authconfig.secret, {
			expiresIn: 86400
		});
		console.log(token);
		return {token, email: person.email, canDrive: person.canDrive};
	
	}

}

module.exports = new AuthenticateService();