const mongoose = require('mongoose');

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

const rental = mongoose.model('Rental', RentalSchema);
module.exports = rental;