const ReserveRepository = require("../repository/ReserveRepository");

class RentalService {
  async create(payload) {
    const result = await ReserveRepository.createReserve(payload);
    return result;
  }

  async listAll(payload) {
    const result = await ReserveRepository.listReserve(payload);
    return result;
  }

  async getById(payload) {
    const result = await ReserveRepository.getReserve(payload);
    return result;
  }

  async update(paylaod, id) {
    const result = await ReserveRepository.updateReserve(paylaod, id);
    return result;
  }

  async delete(payload) {
    const result = await ReserveRepository.deleteReserve(payload);
    return result;
  }
}

module.exports = new RentalService();
// deploy
