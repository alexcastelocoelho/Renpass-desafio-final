const CarSchema = require('../schema/CarSchema')

class CarRepository {
    async create(payload){
        return await CarSchema.create(payload)
    }
}

module.exports = new CarRepository()