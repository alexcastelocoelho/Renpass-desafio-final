const mongoose = require('mongoose');
const bycript = require('bcryptjs');
const mongoosepaginate = require('mongoose-paginate-v2');
const PersonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
    
	cpf: {
		type: String,
		required: true,
		unique: true
	},
    
	birthday: {
		type: String,
		required: true
	},
   
	email: {
		type: String,
		required: true,
		unique: true
	},
    
	password: {
		type: String,
		required: true,
		select: false
	},
    
	canDrive: {
		type: String,
		enum: ['yes', 'no'],
		required: true
	}

},
{versionKey: false}
);

PersonSchema.plugin(mongoosepaginate);

PersonSchema.pre('save', async function(next) {
	const hash = await bycript.hash(this.password, 10);
	this.password = hash;

	next();
});

const person = mongoose.model('Person', PersonSchema);
module.exports = person;
//deploy