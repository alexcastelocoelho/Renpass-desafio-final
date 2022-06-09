const RentalRepository = require('../repository/RentalRepository');

class RentalService {
	async create(payload) {
		const result = await RentalRepository.createRental(payload);
		return result;
	}

	async listAll(payload) {
		const result = await RentalRepository.listRents(payload);
		return result;
	}

	async getById(payload) {
		const result = await RentalRepository.getRental(payload);
		return result; 
	}

	async update(paylaod, id ) {
		const result = await RentalRepository.updateRental(paylaod, id);
		return result;
	}

	async delete(payload) {
		const result = await RentalRepository.deleteRental(payload); 
	}
}

module.exports = new RentalService(); 