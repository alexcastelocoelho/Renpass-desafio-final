const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
	async createReserve(payload){
		return await ReserveSchema.create(payload);
	}
    
	async listReserve(payload) {
		const pagination = {
			totalDocs: 'total',
			docs: 'reserves',
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


		return await ReserveSchema.paginate(payload, options, {});
	}

	async getReserve(payload) {
		return await ReserveSchema.findById(payload);
	}

	async updateReserve(id, payload) {
		return await ReserveSchema.findByIdAndUpdate(id, payload);
	}

	async deleteReserve(payload) {
		return await ReserveSchema.findByIdAndDelete(payload);
	}
	

}

module.exports = new ReserveRepository();
//deploy