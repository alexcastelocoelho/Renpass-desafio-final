class IdNotFound extends Error {
	constructor(id) {
		super();

		this.statusCode = 400;
		this.description = 'Id not Exist';
		this.message = 'id not found';
	} 
}

module.exports = IdNotFound;
//deploy