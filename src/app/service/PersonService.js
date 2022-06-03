const PersonRepository = require('../repository/PersonRepository')

class PersonService {
    async create(payload) {
        const result = await PersonRepository.createPerson(payload)
        return result
    }

    async listAll(payload) {
        const result = await PersonRepository.listPersons(payload)
        return result
    }

    async getById(payload) {
        const result = await PersonRepository.getPerson(payload)
        return result 
    }

    async update(paylaod, id ) {
        const result = await PersonRepository.updatePerson(paylaod, id)
        return result
    }

    async delete(payload) {
        const result = await PersonRepository.deletePerson(payload) 
    }
}

module.exports = new PersonService(); 