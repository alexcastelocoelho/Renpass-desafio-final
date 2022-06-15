const CarSchema = require('../schema/CarSchema');

class CarRepository {
	async createCar(payload){
		return await CarSchema.create(payload);
	}
    
	async listCars(payload) {
		const pagination = {
			totalDocs: 'total',
			docs: 'vehicles',
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
			offset: 1,
			customLabels: pagination 
		};

		return await CarSchema.paginate(payload, options, {});
	}

	async getCar(payload) {
		return await CarSchema.findById(payload);
	}

	async updateCar(id, payload) {
		return await CarSchema.findByIdAndUpdate(id, payload);
	}

	async updateCarAccessory(id, payload, accessories) {
		
		return await CarSchema.findOneAndUpdate({_id: id, 'accessories._id': accessories.description }, 
			{ $set:	{'accessories.$.description': payload}} );	
	}

	async deleteCar(payload) {
		return await CarSchema.findByIdAndDelete(payload);
	}

}

module.exports = new CarRepository();