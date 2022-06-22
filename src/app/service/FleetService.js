const FleetRepository = require('../repository/FleetRepository');

class FleetService {
	async create(payload) {
		const result = await FleetRepository.createFleet(payload);
		return result;
	}

	async listAll(payload) {
		const result = await FleetRepository.listFleet(payload);
		return result;
	}

	async getById(payload) {
		const result = await FleetRepository.getFleet(payload);
		return result; 
	}

	async update(paylaod, id ) {
		const result = await FleetRepository.updateFleet(paylaod, id);
		return result;
	}

	async delete(payload) {
		const result = await FleetRepository.deleteFleet(payload); 
	}
}

module.exports = new FleetService(); 
//deploy