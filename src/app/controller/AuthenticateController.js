const AuthenticaService = require('../service/AuthenticateService');

class AuthenticateController {
    
	async create(req, res) {
		try{
			
			const email = req.body.email;
			const password = req.body.password;
			
			const result = await AuthenticaService.Authenticate(email, password);
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
        
  
}

module.exports = new AuthenticateController();
//deploy