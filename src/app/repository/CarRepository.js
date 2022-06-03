const CarSchema = require('../schema/CarSchema')

class CarRepository {
    async createCar(payload){
        return await CarSchema.create(payload)
    }
    
    async listCars(payload) {
        return await CarSchema.find(payload)
    }

    async getCar(payload) {
        return await CarSchema.findById(payload)
    }

    async updateCar(id, payload) {
        return await CarSchema.findByIdAndUpdate(id, payload)
    }

    async deleteCar(payload) {
        return await CarSchema.findByIdAndDelete(payload)
    }

}

module.exports = new CarRepository()