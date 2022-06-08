
class NotExist extends Error {
	constructor(id) {
		super();

		this.statusCode = 404;
		this.description = 'Id not Exist';
		this.message = 'id not found';
	} 
}

module.exports = NotExist;