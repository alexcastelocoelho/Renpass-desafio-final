const CarRepository = require('../repository/CarRepository');

class CarService {
	async create(payload) {
		const result = await CarRepository.createCar(payload);
		return result;
	}

	async listAll(payload) {
		const result = await CarRepository.listCars(payload);
		return result;
	}

	async getById(payload) {
		const result = await CarRepository.getCar(payload);
		return result; 
	}

	async update(paylaod, id ) {
		const result = await CarRepository.updateCar(paylaod, id);
		return result;
	}

	async delete(payload) {
		const result = await CarRepository.deleteCar(payload); 
	}
}

module.exports = new CarService(); 