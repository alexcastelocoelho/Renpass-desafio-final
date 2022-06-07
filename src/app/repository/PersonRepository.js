const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
	async createPerson(payload){
		return await PersonSchema.create(payload);
	}
    
	async listPersons(payload) {
		return await PersonSchema.find(payload);
	}

	async getPerson(payload) {
		return await PersonSchema.findById(payload);
	}

	async updatePerson(id, payload) {
		return await PersonSchema.findByIdAndUpdate(id, payload);
	}

	async deletePerson(payload) {
		return await PersonSchema.findByIdAndDelete(payload);
	}

	async checkemail(email) {
		return await PersonSchema.find({email}).select('+password');
	}

}

module.exports = new PersonRepository();