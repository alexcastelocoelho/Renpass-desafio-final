const mongoose = require('mongoose');
const bycript = require('bcryptjs');
const PersonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    
	cpf: {
		type: String,
		required: true
	},
    
	birthday: {
		type: String,
		required: true
	},
   
	email: {
		type: String,
		required: true
	},
    
	password: {
		type: String,
		required: true
	},
    
	canDrive: {
		type: String,
		enum: ['yes', 'no'],
		required: true
	}

},
{versionKey: false}
);

PersonSchema.pre('save', async function(next) {
	const hash = await bycript.hash(this.password, 10);
	this.password = hash;

	next();
});

const person = mongoose.model('Person', PersonSchema);
module.exports = person;