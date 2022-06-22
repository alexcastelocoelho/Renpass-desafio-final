const PersonSchema = require('../schema/PersonSchema');

class PersonRepository {
	async createPerson(payload){
		return await PersonSchema.create(payload);
	}
    
	async listPersons(payload) {
		const pagination = {
			totalDocs: 'total',
			docs: 'people',
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
			limit:100,
			offset: 0,
			customLabels: pagination 
		};
		
		return await PersonSchema.paginate(payload, options, {});
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
		return await PersonSchema.findOne({email}).select('+password');
	}

}

module.exports = new PersonRepository();
//deploy