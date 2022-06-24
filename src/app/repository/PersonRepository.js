const PersonSchema = require("../schema/PersonSchema");

class PersonRepository {
  async createPerson(payload) {
    const response = await PersonSchema.create(payload);
    return response;
  }

  async listPersons(payload) {
    const pagination = {
      totalDocs: "total",
      docs: "people",
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

    const response = await PersonSchema.paginate(payload, options, {});
    return response;
  }

  async getPerson(payload) {
    const response = await PersonSchema.findById(payload);
    return response;
  }

  async updatePerson(id, payload) {
    const response = await PersonSchema.findByIdAndUpdate(id, payload);
    return response;
  }

  async deletePerson(payload) {
    const response = await PersonSchema.findByIdAndDelete(payload);
    return response;
  }

  async checkemail(email) {
    const response = await PersonSchema.findOne({ email }).select("+password");
    return response;
  }
}

module.exports = new PersonRepository();
// deploy
