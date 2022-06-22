const RentalService = require('../service/RentalService');

class RentalController {
	async creating(req, res) {
		try {
			const result = await RentalService.create(req.body); 
			return res.status(201).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listing(req, res) {
		try {
			const result = await RentalService.listAll(req.query);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async listone(req, res) {
		try {
			const result = await RentalService.getById(req.params.id);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}

	async updating(req, res) {
		try {
			const result = await RentalService.update(req.params.id, req.body);
			return res.status(200).json(result);
		} catch (error) {
			return res.status(400).json(error);
		}
	}
    
	async deleting(req, res) {
		try {
			const result = await RentalService.delete(req.params.id);
			return res.status(204).json(result);
		} catch (error) {
			return res.status(400).json(error); 
		}
	}

}

module.exports = new RentalController();

//deploy