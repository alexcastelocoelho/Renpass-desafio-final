const mongoose = require('mongoose');
const mongoosepaginate = require('mongoose-paginate-v2');
const RentalSchema = new mongoose.Schema({
	
    
	name: {
		type: String,
		required: true
	},
	cnpj: {
		type: String,
		required: true,
		unique: true
	},

	activities: {
		type: String,
		required: true
	},

	address: [
		{
			_id: false,
			zipCode: {
				type: String,
				required: true
			},
			number: {
				type: String,
				required: true
			},
			complement: {
				type: String
			},
			isfilial: {
				type: Boolean,
				required: true
			},
			street: {
				type: String,
				required: true
			},
			district: {
				type: String,
				required: true
			},
			city: {
				type: String,
				required: true
			},
			state: {
				type: String,
				required: true
			}            

		}
	]


},
{versionKey: false}
);
RentalSchema.plugin(mongoosepaginate);
const rental = mongoose.model('Rental', RentalSchema);
module.exports = rental;

//deploy
//deploy