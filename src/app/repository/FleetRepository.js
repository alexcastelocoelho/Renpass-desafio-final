const FleetSchema = require("../schema/FleetSchema");

class FleetRepository {
  async createFleet(payload) {
    const response = await FleetSchema.create(payload);
    return response;
  }

  async listFleet(payload) {
    const pagination = {
      totalDocs: "total",
      docs: "fleet",
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
      total: 346,
      limit: 100,
      offset: 0,
      offsets: 35,
      customLabels: pagination,
    };

    const response = await FleetSchema.paginate(payload, options, {});
    return response;
  }

  async getFleet(payload) {
    const response = await FleetSchema.findById(payload);
    return response;
  }

  async updateFleet(id, payload) {
    const response = await FleetSchema.findByIdAndUpdate(id, payload);
    return response;
  }

  async deleteFleet(payload) {
    const response = await FleetSchema.findByIdAndDelete(payload);
    return response;
  }
}

module.exports = new FleetRepository();
// deploy
