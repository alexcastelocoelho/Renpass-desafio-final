const RentalSchema = require('../schema/RentalSchema');

class RentalRepository {
	async createRental(payload){
		return await RentalSchema.create(payload);
	}
    
	async listRents(payload) {
		const pagination = {
			totalDocs: 'total',
			docs: 'rentals',
			page: 'offset',
			totalPages: 'offsets',
			prevPage: false,
			nextPage: false,
			pagingCounter: false,
			meta: false,
			hasPrevPage: false,
			hasNextPage: false
		};
		const options = {
			limit:100,
			offset: 0,
			customLabels: pagination 
		};
		return await RentalSchema.paginate(payload, options, {});
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