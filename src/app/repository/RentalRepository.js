const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	async createRental(payload){
		return await RentalSchema.create(payload);
	}
    
	async listRents(payload) {
		return await RentalSchema.find(payload);
	}

	async getRental(payload) {
		return await RentalSchema.findById(payload);
	}

	async updateRental(id, payload) {
		return await RentalSchema.findByIdAndUpdate(id, payload);
	}

	async deleteRental(payload) {
		return await RentalSchema.findByIdAndDelete(payload);
	}
	

}

module.exports = new RentalRepository();