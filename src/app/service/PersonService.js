/* eslint-disable no-unused-vars */
const PersonRepository = require('../repository/PersonRepository');
const NotExist = require('../errors/personErrors/NotExist');
// const cpf = require("../utils/CpfCnpjvalid");

class PersonService {
  async create(payload) {
    // if (!cpf(payload.cpf)) {
    //   throw new Error("Invalid CPF, check the format or enter a valid CPF");
    // }
    const result = await PersonRepository.createPerson(payload);
    return result;
  }

  async listAll(payload) {
    const result = await PersonRepository.listPersons(payload);
    return result;
  }

  async getById(payload) {
    const result = await PersonRepository.getPerson(payload);
    if (!result) {
      throw new NotExist(payload);
    }
    return result;
  }

  async update(id, payload) {
    // if (!cpf(payload.cpf)) {
    //   throw new Error("Invalid CPF, check the format or enter a valid CPF");
    // }
    const result = await PersonRepository.updatePerson(id, payload);
    if (!result) {
      throw new NotExist(id);
    }
    return result;
  }

  async delete(payload) {
    const result = await PersonRepository.deletePerson(payload);
    if (!result) {
      throw new NotExist(payload);
    }
  }
}

module.exports = new PersonService();
// deploy
