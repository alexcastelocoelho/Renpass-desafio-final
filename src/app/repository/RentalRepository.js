const RentalSchema = require("../schema/RentalSchema");
// deploy
class RentalRepository {
  async createRental(payload) {
    const response = await RentalSchema.create(payload);
    return response;
  }

  async listRents(payload) {
    const pagination = {
      totalDocs: "total",
      docs: "rentals",
      page: "offset",
      totalPages: "offsets",
      prevPage: false,
      nextPage: false,
      pagingCounter: false,
      meta: false,
      hasPrevPage: false,
      hasNextPage: false,
    };
    const options = {
      limit: 100,
      offset: 0,
      customLabels: pagination,
    };
    const response = await RentalSchema.paginate(payload, options, {});
    return response;
  }

  async getRental(payload) {
    const response = await RentalSchema.findById(payload);
    return response;
  }

  async updateRental(id, payload) {
    const response = await RentalSchema.findByIdAndUpdate(id, payload);
    return response;
  }

  async deleteRental(payload) {
    const response = await RentalSchema.findByIdAndDelete(payload);
    return response;
  }
}

module.exports = new RentalRepository();
// deploy
