const AuthenticaService = require("../service/AuthenticateService");

class AuthenticateController {
  async create(req, res) {
    try {
      const { email } = req.body;
      const { password } = req.body;

      const result = await AuthenticaService.Authenticate(email, password);
      return res.status(200).json({ token: result.token });
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

module.exports = new AuthenticateController();
// deploy
