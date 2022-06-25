const CarSchema = require('../schema/CarSchema');

class CarRepository {
  async createCar(payload) {
    const response = await CarSchema.create(payload);
    return response;
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
      limit: 100,
      offset: 0,
      customLabels: pagination
    };
    const response = await CarSchema.paginate(payload, options, {});

    return response;
  }

  async getCar(payload) {
    const response = await CarSchema.findById(payload);
    return response;
  }

  async updateCar(id, payload) {
    const response = await CarSchema.findByIdAndUpdate(id, payload);
    return response;
  }

  async updateCarAccessory(id, idaccessories, payload) {
    const response = await CarSchema.findOneAndUpdate(
      { _id: id, 'accessories._id': idaccessories },
      { $set: { 'accessories.$.description': payload.description } },
      { new: true }
    );
    return response;
  }

  async deleteCar(payload) {
    const response = await CarSchema.findByIdAndDelete(payload);
    return response;
  }
}

module.exports = new CarRepository();
// deploy
