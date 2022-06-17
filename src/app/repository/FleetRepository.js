const FleetSchema = require('../schema/FleetSchema');

class FleetRepository {
	async createFleet(payload){
		return await FleetSchema.create(payload);
	}
    
	async listFleet(payload) {
		const pagination = {
			totalDocs: 'total',
			docs: 'fleet',
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
			total: 346,
			limit:100,
			offset: 1,
			offsets: 35,
			customLabels: pagination 
		};


		return await FleetSchema.paginate(payload, options, {});
	}

	async getFleet(payload) {
		return await FleetSchema.findById(payload);
	}

	async updateFleet(id, payload) {
		return await FleetSchema.findByIdAndUpdate(id, payload);
	}

	async deleteFleet(payload) {
		return await FleetSchema.findByIdAndDelete(payload);
	}
	

}

module.exports = new FleetRepository();