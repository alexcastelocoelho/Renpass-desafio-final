
const mongoose = require('mongoose');

const ReserveSchema = new mongoose.Schema({
	id_user: {
		type: String,
		required:true
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
		type: String,
		required: true
	},
    
	id_rental: {
		type: String,
		required: true
	},

	final_value: {
		type: String,
		required: true
	},	

}, 
{versionKey: false}
);



const reserve = mongoose.model('Reserve', ReserveSchema);
module.exports = reserve;