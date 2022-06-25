/* eslint-disable no-unused-vars */
const CarRepository = require('../repository/CarRepository');
const IdNotFound = require('../errors/CarErrors/IdNotFound');

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
    if (!result) {
      throw new IdNotFound(payload);
    }
    return result;
  }

  async update(paylaod, id) {
    const result = await CarRepository.updateCar(paylaod, id);
    if (!result) {
      throw new IdNotFound(id);
    }
    return result;
  }

  async updateAcessory(paylaod, id, idaccessories) {
    const result = await CarRepository.updateCarAccessory(paylaod, id, idaccessories);
    return result;
  }

  async delete(payload) {
    const result = await CarRepository.deleteCar(payload);
  }
}

module.exports = new CarService();
// deploy
