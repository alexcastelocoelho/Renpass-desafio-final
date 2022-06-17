
const mongoose = require('mongoose');
const mongoosepaginate = require('mongoose-paginate-v2');
const ReserveSchema = new mongoose.Schema({
	id_user: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Person',
		required:true,
		unique: true
	},
    
	data_start: {
		type:String,
		required: true
	},

	data_end: {
		type: String,
		required: true

	},
    
	id_car: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Car',
		required: true
	},
    
	id_rental: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Rental',
		required: true
	},

	final_value: {
		type: String,
		required: true
	},	

}, 
{versionKey: false}
);

ReserveSchema.plugin(mongoosepaginate);

const reserve = mongoose.model('Reserve', ReserveSchema);
module.exports = reserve;