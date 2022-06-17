const mongoose = require('mongoose');
const mongoosepaginate = require('mongoose-paginate-v2');
const FleetSchema = new mongoose.Schema({
	id_car: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Car',
		required: true
	},
    
	id_rental: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Rental',
		required: true
	},

	status: {
		type: String,
		enum: ['available', 'unavailable', 'rented'] ,
		required: true

	},
    
	daily_value: {
		type: String,
		required: true
	},
    
	plate: {
		type: String,
		required: true,
		unique: true
	},
		

}, 
{versionKey: false}
);

FleetSchema.plugin(mongoosepaginate);

const fleet = mongoose.model('Fleet', FleetSchema);
module.exports = fleet;