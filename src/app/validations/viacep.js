const axios = require('axios');

class ViaCep{
	async  consumptionByZipCode(zipCode) {
		const api = await axios.get(`https://viacep.com.br/ws/${zipCode}/json`);
		return api.data;
	}

}
module.exports = new ViaCep();