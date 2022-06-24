const ReserveSchema = require("../schema/ReserveSchema");

class ReserveRepository {
  async createReserve(payload) {
    const response = await ReserveSchema.create(payload);
    return response;
  }

  async listReserve(payload) {
    const pagination = {
      totalDocs: "total",
      docs: "reserves",
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
      offset: 1,
      offsets: 35,
      customLabels: pagination,
    };

    const response = await ReserveSchema.paginate(payload, options, {});
    return response;
  }

  async getReserve(payload) {
    const response = await ReserveSchema.findById(payload);
    return response;
  }

  async updateReserve(id, payload) {
    const response = await ReserveSchema.findByIdAndUpdate(id, payload);
    return response;
  }

  async deleteReserve(payload) {
    const response = await ReserveSchema.findByIdAndDelete(payload);
    return response;
  }
}

module.exports = new ReserveRepository();
// deploy
