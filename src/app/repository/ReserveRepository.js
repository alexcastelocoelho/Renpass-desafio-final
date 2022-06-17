const ReserveSchema = require('../schema/ReserveSchema');

class ReserveRepository {
	async createReserve(payload){
		return await ReserveSchema.create(payload);
	}
    
	async listReserve(payload) {
		return await ReserveSchema.find(payload);
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