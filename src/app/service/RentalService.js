/* eslint-disable no-sequences */
const RentalRepository = require('../repository/RentalRepository');
const ViacCep = require('../utils/ViaCep');
const Cnpj = require('../utils/CpfCnpjvalid');

class RentalService {
  async create(payload) {
    if (!Cnpj(payload.cnpj)) {
      throw new Error('invalid cnpj, check the format or enter a valid one');
    }

    let x = 0;
    const fieldAddress = payload.address;

    do {
      const field = fieldAddress[x];
      // eslint-disable-next-line no-await-in-loop
      const api = await ViacCep.consumptionByZipCode(field.zipCode);
      const { cep, logradouro, complemento, bairro, localidade, uf } = api;
      // eslint-disable-next-line no-unused-expressions
      (field.zipCode = cep),
        (field.street = logradouro),
        (field.complement = complemento),
        (field.district = bairro),
        (field.city = localidade),
        (field.state = uf);
      field.isfilial = false;
      x += 1;
    } while (x < fieldAddress.length);

    const result = await RentalRepository.createRental(payload);
    return result;
  }

  async listAll(payload) {
    const result = await RentalRepository.listRents(payload);
    return result;
  }

  async getById(payload) {
    const result = await RentalRepository.getRental(payload);
    return result;
  }

  async update(paylaod, id) {
    const result = await RentalRepository.updateRental(paylaod, id);
    return result;
  }

  async delete(payload) {
    const result = await RentalRepository.deleteRental(payload);
    return result;
  }
}

module.exports = new RentalService();
// deploy
